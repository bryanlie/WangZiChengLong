pipeline { 
    agent any

    environment {
        AWS_ACCOUNT_ID=${{ secrets.AWS_ACCOUNT_ID }}
        AWS_DEFAULT_REGION="us-east-1" 
        IMAGE_REPO_NAME="WangZiChengLong"
        IMAGE_TAG="${env.BUILD_NUMBER}"
        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
    }

    stages {    
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/bryanlie/WangZiChengLong.git']])
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build "${IMAGE_REPO_NAME}:${IMAGE_TAG}"
                }
            }
        }
        stage('Push to ECR') {
            steps {
                script {
                    sh "aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"
                    sh "docker tag ${IMAGE_REPO_NAME}:${IMAGE_TAG} ${REPOSITORY_URI}:$IMAGE_TAG"
                    sh "docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:${IMAGE_TAG}"
                }
            }
        }        
        stage('Deploy to ECS') {
            steps {
                withAWS(credentials: ${{ secrets.AWS_CREDENTIALS_ID }}, region: "${AWS_DEFAULT_REGION}") {
                    sh 'aws ecs update-service --cluster web-cluster --service my-nginx-service --force-new-deployment'
                }
            }
        }
    }
}
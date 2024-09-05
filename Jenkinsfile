pipeline { 
    agent any

    environment {
        AWS_ACCOUNT_ID=credentials('aws-account-id')
        AWS_DEFAULT_REGION="us-east-1" 
        IMAGE_REPO_NAME="WangZiChengLong"
        IMAGE_TAG="${env.BUILD_NUMBER}"
    }

    stages {    
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']], 
                    userRemoteConfigs: [[
                        url: 'https://github.com/bryanlie/WangZiChengLong.git',
                        credentialsId: 'github-access-token2'
                    ]]
                ])
            }
        }
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
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
                    REPOSITORY_URI = "${env.AWS_ACCOUNT_ID}.dkr.ecr.${env.AWS_DEFAULT_REGION}.amazonaws.com/${env.IMAGE_REPO_NAME}"
                    sh "aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"
                    sh "docker tag ${IMAGE_REPO_NAME}:${IMAGE_TAG} ${REPOSITORY_URI}:$IMAGE_TAG"
                    sh "docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:${IMAGE_TAG}"
                }
            }
        }        
        stage('Deploy to ECS') {
            steps {
                withAWS(credentials: credentials('aws-jenkins-credentials'), region: "${AWS_DEFAULT_REGION}") {
                    sh 'aws ecs update-service --cluster web-cluster --service my-nginx-service --force-new-deployment'
                }
            }
        }
    }
}

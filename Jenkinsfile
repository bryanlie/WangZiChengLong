pipeline { 
    agent any

    environment {
        AWS_ACCOUNT_ID=credentials('aws-account-id')
        AWS_DEFAULT_REGION="us-east-1" 
        IMAGE_REPO_NAME="WangZiChengLong"
        IMAGE_TAG="${env.BUILD_NUMBER}"
    }

    stages {
        stage('Initialize Variables') {
            steps {
                script {
                    // Define the global variable here
                    lowerCaseRepoName = env.IMAGE_REPO_NAME.toLowerCase()
                }
            }
        }
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']], 
                    userRemoteConfigs: [[
                        url: 'https://github.com/bryanlie/WangZiChengLong.git',
                        credentialsId: 'github-access-token'
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
                    dockerImage = docker.build "${lowerCaseRepoName}:${IMAGE_TAG}"
                }
            }
        }
        stage('Push to ECR') {
            steps {
                script {
                    REPOSITORY_URI = "${env.AWS_ACCOUNT_ID}.dkr.ecr.${env.AWS_DEFAULT_REGION}.amazonaws.com/${lowerCaseRepoName}"
                    withCredentials([[
                        $class: 'AmazonWebServicesCredentialsBinding',
                        credentialsId: 'aws-account-id'
                    ]]) {
                        bat """
                            aws ecr get-login-password --region ${env.AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${REPOSITORY_URI}
                            docker tag ${lowerCaseRepoName}:${env.IMAGE_TAG} ${REPOSITORY_URI}:${env.IMAGE_TAG}
                            docker push ${REPOSITORY_URI}:${env.IMAGE_TAG}
                        """
                    }
                }
            }
        }        
        stage('Deploy to ECS') {
            steps {
                withAWS(credentials: credentials('aws-jenkins-credentials'), region: "${env.AWS_DEFAULT_REGION}") {
                    bat 'aws ecs update-service --cluster web-cluster --service my-nginx-service --force-new-deployment'
                }
            }
        }
    }
}

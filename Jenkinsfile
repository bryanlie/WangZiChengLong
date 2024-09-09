pipeline {
    agent any

    environment {
        AWS_ACCOUNT_ID = credentials('aws-account-id')
        AWS_DEFAULT_REGION = "us-east-1" 
        IMAGE_REPO_NAME = "WangZiChengLong"
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        PUBLIC_ECR_REGISTRY = "public.ecr.aws"
        PUBLIC_ECR_ALIAS = "r0c3j2a2"
        PUBLIC_ECR_REPOSITORY = "vuejsweb"
        DOCKER_IMAGE = "node:20"
    }

    stages {
        stage('Initialize Variables') {
            steps {
                script {
                    lowerCaseRepoName = env.IMAGE_REPO_NAME.toLowerCase()
                }
            }
        }
        
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/linux']], 
                    userRemoteConfigs: [[
                        url: 'https://github.com/bryanlie/WangZiChengLong.git',
                        credentialsId: 'github-access-token'
                    ]]
                ])
            }
        }
        
        stage('Build') {
            agent {
                docker {
                    image "${DOCKER_IMAGE}"
                    args '-u root:root'  // Run as root to avoid permission issues
                }
            }
            steps {
                sh '''
                    # Create and set permissions for npm cache directory
                    mkdir -p /.npm
                    chmod -R 777 /.npm

                    # Run npm commands
                    npm install
                    npm run build
                '''
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {                    
                    dockerImage = docker.build "${lowerCaseRepoName}:${IMAGE_TAG}"
                }
            }
        }
        
        stage('Push to Public ECR') {
            steps {
                script {
                    REPOSITORY_URI = "${PUBLIC_ECR_REGISTRY}/${PUBLIC_ECR_ALIAS}/${PUBLIC_ECR_REPOSITORY}/${lowerCaseRepoName}"
                    withAWS(credentials: 'aws-jenkins-credentials', region: "${AWS_DEFAULT_REGION}"){
                        sh """
                            aws ecr-public get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${PUBLIC_ECR_REGISTRY}/${PUBLIC_ECR_ALIAS}
                            docker tag ${lowerCaseRepoName}:${IMAGE_TAG} ${REPOSITORY_URI}:${IMAGE_TAG}
                            docker push ${REPOSITORY_URI}:${IMAGE_TAG}
                        """
                    }
                }
            }
        }        
        
        stage('Deploy to ECS') {
            steps {
                withAWS(credentials: 'aws-jenkins-credentials', region: "${env.AWS_DEFAULT_REGION}") {
                    sh 'aws ecs update-service --cluster web-cluster --service my-nginx-service --force-new-deployment'
                }
            }
        }
    }
}

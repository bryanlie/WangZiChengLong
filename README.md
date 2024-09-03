# Wang Zi Cheng Long (望子成龙)

![home_logo](./src/assets/wangzichenglong.png)

## Welcome!

This website is your one-stop resource for empowering your child's lifelong success. We are parents, just like you, dedicated to helping our children thrive - from elementary school all the way to fulfilling careers.

## Our Mission:

   - Guide you through the complexities of modern education.
   - Share valuable resources to fuel your child's potential.
   - Build a supportive community of parents on a shared journey.

Together, we can raise the leaders of tomorrow!

## What We Offer:

   - Cracking the Code to Ivy League Aspirations: Explore a holistic approach to education, equipping you with strategies to nurture your child's academic excellence and well-rounded development.
   - Success Beyond Graduation: Our focus extends beyond college admissions. We help you foster a lifelong love of learning, explore advanced education opportunities, and prepare your child for a fulfilling career.
   - Bridging East & West: We acknowledge the distinct strengths of Eastern and Western education philosophies. Learn how to leverage both for a holistic learning experience.

## Key Features:

   - Articles and Guides: In-depth content on various educational topics.
   - Resource Library: Curated collection of valuable tools and materials.

## Getting Started:

   - Browse the website: Explore our content and discover resources that resonate with your needs.

## Contributing:

We believe in a collaborative approach to education. While we have a growing library of resources, we're always open to suggestions! If you have any ideas or contributions, please feel free to reach out to us.

## Version

- current version: v1.0.0
- last update: Auguest 2024

## TODO
## Dan
- Test Paypal API, turn on business version
- add google ads
- switch between Chinese and English
- Data analysis and visualization

## Yimin
- use Jenkins to connect GitHub with ECS

- To use Jenkins to connect GitHub with ECS and automate the publishing of a Vue.js web app, you can set up a pipeline that does the following:

    Pull code from GitHub
    Build the Vue.js app
    Create a Docker image
    Push the image to Amazon ECR
    Deploy the image to ECS

Here's a step-by-step guide to set this up:

    Set up Jenkins with necessary plugins:
        GitHub plugin
        Amazon ECR plugin
        Amazon ECS plugin
        Docker plugin
    Create credentials in Jenkins for:
        GitHub access
        AWS access (IAM user with ECR and ECS permissions)
    Create a Jenkinsfile in your GitHub repository:

groovy
pipeline {
    agent any
    
    environment {
        AWS_ACCOUNT_ID="your-aws-account-id"
        AWS_DEFAULT_REGION="your-aws-region" 
        IMAGE_REPO_NAME="your-ecr-repo-name"
        IMAGE_TAG="${env.BUILD_NUMBER}"
        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
    }
   
    stages {
        
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/your-repo.git']])
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
                withAWS(credentials: 'your-aws-credentials-id', region: "${AWS_DEFAULT_REGION}") {
                    sh 'aws ecs update-service --cluster your-cluster-name --service your-service-name --force-new-deployment'
                }
            }
        }
    }
}

    Create a Dockerfile in your repository:

    In Jenkins, create a new pipeline job:
        Choose "Pipeline script from SCM" in the pipeline definition
        Select Git as SCM
        Enter your GitHub repository URL
        Specify the branch to build
        Set the script path to "Jenkinsfile"
    Set up webhook in GitHub:
        Go to your GitHub repository settings
        Click on "Webhooks"
        Add webhook
        Set Payload URL to your Jenkins URL (e.g., http://your-jenkins-url/github-webhook/)
        Choose "application/json" for content type
        Select "Just the push event"
    Make sure your ECS cluster and service are set up in AWS.

Now, whenever you push changes to your GitHub repository, it will trigger the Jenkins pipeline, which will build your Vue.js app, create a Docker image, push it to ECR, and deploy it to your ECS cluster. Remember to replace placeholders like your-aws-account-id, your-aws-region, your-ecr-repo-name, your-cluster-name, and your-service-name with your actual AWS and ECS details.

- use GitHub Actions to connect GitHub with ECS
- check for other deployment plans, e.g.  Vercel
- learn EKS and replace ECS + Fargate with EKS to publish the web app
- finalize the best deployment strategy and publish to the public

- add amazon affilicate and replace amazon links
- publish the web app and monitor it using google analytics
- build a backlog for the web app
- use a domain name to replace the public IP

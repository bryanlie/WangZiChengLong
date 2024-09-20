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
- switch between Chinese and English
- Data analysis and visualization
- add google ads
- add amazon affilicate and replace amazon links

## Yimin
https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-application-load-balancer.html

- deploy the web app to AWS EKS using GitHub Actions

To deploy your web app to AWS EKS using GitHub Actions, you can follow these steps:
Set Up AWS EKS Cluster

    Create an EKS cluster using the AWS CLI or eksctl tool:

bash
eksctl create cluster --name your-cluster-name --region your-region --nodegroup-name linux-nodes --node-type t2.micro --nodes 2

Configure GitHub Repository

    Create a .github/workflows directory in your repository.
    Create a YAML file (e.g., deploy.yml) in the workflows directory to define your GitHub Actions workflow.

Set Up GitHub Actions Workflow

    Configure your workflow file with the following key components:

text
name: Deploy to EKS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v3
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: your-aws-region

    - name: Install kubectl
      uses: azure/setup-kubectl@v3
      with:
        version: 'v1.27.1'

    - name: Update kubeconfig
      run: aws eks get-token --cluster-name your-cluster-name | kubectl apply -f -

    - name: Deploy to EKS
      run: |
        kubectl apply -f your-kubernetes-manifests.yaml
        kubectl rollout status deployment/your-deployment-name

Set Up GitHub Secrets

    Add your AWS credentials as secrets in your GitHub repository:
        Go to your repository settings
        Click on "Secrets and variables" then "Actions"
        Add AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY as new secrets

Prepare Kubernetes Manifests

    Create Kubernetes manifest files (e.g., deployment.yaml, service.yaml) for your web app and add them to your repository.

Push and Deploy

    Commit and push your changes to the main branch. GitHub Actions will automatically trigger the workflow to deploy your app to EKS

    .

Best Practices

    Use IAM roles for authentication instead of long-lived access keys when possible

.
Consider using OIDC provider for more secure authentication between GitHub and AWS
.
Implement proper RBAC (Role-Based Access Control) for your EKS cluster

    .
    Use environment variables or GitHub secrets for sensitive information.
    Implement proper testing and staging environments before deploying to production.

By following these steps, you can set up a CI/CD pipeline that automatically deploys your web app to AWS EKS whenever you push changes to your main branch

## fix the issue with EKS

`kubectl get nodes` didn't get any nodes since there is no nodegroup available

first prepare a file, let us call it cluster-config.yaml, and upload it to AWS CloudShell, 

run the following command in CloudShell

`eksctl create nodegroup -f nodegroup.yaml`

you can check the status of creating nodegroup in cloudFormation

if you want to delete the nodegroup, you could use,

`eksctl delete nodegroup --cluster myeks-cluster --name ng-1`

  
- finalize the best deployment strategy and publish to the public


- publish the web app and monitor it using google analytics
- build a backlog for the web app
- use a domain name to replace the public IP

# develop a website for our company using Vue.js

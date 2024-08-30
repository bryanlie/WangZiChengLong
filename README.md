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
- Test Paypal API, turn on business version
- use ECS to publish the web app
  
To publish a web app based on an image in AWS ECR, you'll need to follow these steps:

    Ensure your Docker image is pushed to ECR:
    Make sure your web app's Docker image is already pushed to your ECR repository

.
Create an ECS Task Definition:

    Open the Amazon ECS console
    Navigate to "Task Definitions" and click "Create new Task Definition"
    Choose a launch type (e.g., EC2 or Fargate)
    Configure the task with your ECR image URI, required CPU/memory, and necessary port mappings

Set up an ECS Cluster:

    In the ECS console, go to "Clusters" and click "Create Cluster"
    Choose a cluster template (e.g., EC2 Linux + Networking or Fargate)
    Configure the cluster settings as needed

Create an ECS Service:

    In your cluster, create a new service
    Select the task definition you created earlier
    Configure the service with desired number of tasks, networking options, and load balancing if required

Configure networking:

    Set up a load balancer if you want to distribute traffic across multiple instances of your app
    Configure security groups to allow inbound traffic on the necessary ports

Launch your service:

    Review your settings and launch the service
    ECS will pull the image from ECR and deploy it according to your service configuration

Access your web app:

    Once the service is running, you can access your web app through the load balancer's DNS name or the public IP of the EC2 instance (if not using a load balancer)

Monitor and scale:

    Use Amazon CloudWatch to monitor your application's performance
    Adjust the number of tasks or set up auto-scaling rules as needed

Remember to ensure that your ECS tasks have the necessary permissions to pull images from ECR. You may need to attach an appropriate IAM role to your ECS task execution role.


- use Jenkins to connect GitHub with ECS
- use GitHub Actions to connect GitHub with ECS
- check for other deployment plans, e.g.  Vercel
- learn EKS and replace ECS + Fargate with EKS to publish the web app
- finalize the best deployment strategy and publish to the public
- add google ads
- add amazon affilicate and replace amazon links
- publish the web app and monitor it using google analytics
- build a backlog for the web app
- 

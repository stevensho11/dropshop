# Dropshop

## Description

Visit Dropshop at [dropshop-on-aws.stevensho.com/](https://dropshop-on-aws.stevensho.com/) or [dropshop-render.stevensho.com/](https://dropshop-render.stevensho.com/)

Dropshop is an eCommerce application built using the MERN stack. It features client-side routing, user authentication, a dynamic product catalog, and integration with the PayPal API.

The application is also deployed using Amazon Web Services (AWS) - The backend is hosted on AWS Elastic Beanstalk, which automates server setup, capacity provisioning, and load balancing. The frontend is distributed via AWS CloudFront, ensuring fast delivery and enhanced user experience.

## Technologies Used

- **Frontend**: React.js, Vite, React Router, Bootstrap, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Processing**: PayPal API Integration
- **State Management**: Redux
- **Cloud Hosting and Services**:
  - AWS Elastic Beanstalk
  - AWS CloudFront
  - AWS S3
- **CI/CD**:
  - AWS CodeBuild
  - AWS CodePipeline
- **Other Libraries/Tools**:
  - bcryptjs (for password hashing)
  - cookie-parser (to parse cookie header and populate `req.cookies`)
  - multer (for handling multipart/form-data, primarily used for uploading files)
  - react-helmet-async (for managing changes to the document head)

## Deployment Strategy

- **Backend Deployment**: 
  - Hosted on AWS Elastic Beanstalk
  - Configured with custom domain and SSL/TLS certificate through AWS Certificate Manager for secure HTTPS access.
- **Frontend Deployment**:
  - Distributed through AWS CloudFront
  - Integrated with AWS S3 for storage and management of static files.
  - Custom domain setup with SSL/TLS certificate to ensure secure browsing.
- **CI/CD Integration**:
  - AWS CodeBuild for continuous integration and building of the application.
  - AWS CodePipeline for continuous delivery, enabling automated deployments to AWS services.

## Features

- Product browsing and search functionality
- User registration and authentication
- Shopping cart management
- Secure checkout and payment process
- Order tracking and history for registered users
- Admin dashboard for managing products and orders

## Credits

Thank you to Brad Traversy @ TraversyMedia for the project material and inspiration!

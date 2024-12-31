import Markdown from "@/components/markdown";
import { MdOutlineHome } from "react-icons/md";
import { Metadata } from "next";

export const runtime = "edge";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms of Service",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEB_BASE_URL}/terms-of-service`,
    },
  };
}

export default function () {
  const content = ` # Terms of Service

## Introduction and Acceptance of Terms

Welcome to **ShipAny**, a NextJS boilerplate designed for building AI SaaS startups quickly and efficiently. By accessing or using our service, you agree to be bound by these Terms of Service. If you do not agree with any of these terms, please do not use our service.

## Use of the Service

ShipAny provides users with a comprehensive platform to build and launch AI SaaS startups using our pre-built templates and infrastructure. You agree to use the service in accordance with all applicable local, state, national, and international laws and regulations.

## User Accounts and Registration

1. **Account Creation**: To access certain features of the service, you need to create an account. You must provide accurate and complete information during the registration process.

2. **Account Security**: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.

3. **User Responsibilities**: You agree to notify us immediately of any unauthorized use of your account or any other breach of security.

## Content and Intellectual Property Rights

All content provided through ShipAny, including but not limited to templates, code, infrastructure setup, and documentation, is protected under copyright law. The copyright owner of ShipAny is **shipany.ai**.

- You acknowledge that you do not own the underlying technology or intellectual property that makes up the ShipAny service, and you agree to respect the intellectual property rights of shipany.ai and any third parties.
- While you retain ownership of your custom implementations and modifications, the core ShipAny platform and templates remain the property of shipany.ai.

## Prohibited Activities

You agree not to engage in any of the following prohibited activities while using ShipAny:

- Unauthorized access to or distribution of our proprietary code and templates
- Reselling or redistributing ShipAny templates without authorization
- Interfering with or disrupting the security or performance of the service
- Using the service for any illegal or unauthorized purpose
- Attempting to bypass any security features of the service

## Privacy and Data Collection

ShipAny collects the following types of data:

- **Account Information**: Information you provide when creating an account
- **Usage Details**: Data related to your activity on our service
- **Device Information**: Information about the device you use to access our service
- **Cookies**: Data that helps us enhance your experience with our service
- **Payment and Billing Information**: Data necessary to process payments

For more details on data collection practices, please refer to our separate [Privacy Policy](/privacy-policy).

## Pricing and Payments

- All purchases are final and non-refundable unless otherwise required by law
- Prices are subject to change with notice to users
- You agree to pay all charges associated with your selected plan
- Payment terms are based on your selected payment method and plan

## Termination

We reserve the right to terminate or suspend your access to the service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the service, us, or third parties.

## Disclaimer of Warranties

The service is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy, reliability, or availability of the service and disclaim all warranties to the fullest extent permitted by law.

## Limitation of Liability

To the fullest extent permitted by law, shipany.ai shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use the service.

## Indemnification

You agree to indemnify and hold harmless shipany.ai, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from your use of the service or violation of these Terms.

## Governing Law and Dispute Resolution

These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which shipany.ai operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or the service will be resolved through binding arbitration in accordance with applicable laws.

## Changes to These Terms

We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of the service after any changes signifies your acceptance of the new terms.

## Contact Information

If you have any questions about these Terms, please contact us at [support@shipany.ai](mailto:support@shipany.ai).

---

By using ShipAny, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. Thank you for choosing ShipAny!
`;

  return (
    <div>
      <a className="text-base-content cursor-pointer" href="/">
        <MdOutlineHome className="text-2xl mx-8 my-8" />
        {/* <img className="w-10 h-10 mx-4 my-4" src="/logo.png" /> */}
      </a>
      <div className="max-w-3xl mx-auto leading-loose pt-4 pb-8 px-8">
        <Markdown content={content} />
      </div>
    </div>
  );
}

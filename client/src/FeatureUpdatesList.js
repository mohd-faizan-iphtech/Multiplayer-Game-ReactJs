/* eslint-disable react/jsx-key */

export function FeatureUpdatesList() {
  const featureUpdate = [
    {
      date: `Saturday, Jan 21, 2023`,
      featureData: [
        {
          title: `Loan Edits`,

          body: [
            `We overhauled the Loan Edit Page so that updating items like how much you want to charge for Late Fees or what the monthly fees should be is more clear and easier than ever!`,
            <br />,
            <br />,
          ],
        },
      ],
    },
    {
      date: `Saturday, Jan 28, 2023 `,
      featureData: [
        {
          title: `Credit Cards!`,

          body: [
            `Credit Cards are officially live! It seemed to be at the top of y'alls list, so we moved it to the top of ours.`,
            <br />,
            <br />,
            `All you need to do to get started with that integration is to head over to the “Payment Methods” Page and fill out the form. From there we'll be in touch and get the rest set up step by step.`,
            <br />,
            <br />,
          ],
        },
      ],
    },

    {
      date: `Saturday, Feb 4, 2023 `,
      featureData: [
        {
          title: `Loan Data Downloads`,

          body: [
            `The way I see it, it's your borrowers, it's your loans, it's your data!`,
            <br />,
            <br />,
            `It was always frustrating to me when a platform had all of this great data about my business but wouldn't let me easily get at any of it. We're not going to roll like that. This week we released the ability to download both the Payment Schedule and the Payment History, in all it's detailed glory! This can be done for one or all of your notes by going to the “Manage” option in the top right of the details section of any loan.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Payment Schedules`,

          body: [
            `Speaking of Payment Schedules, this week we also completed the overhaul of this section! We recognized that this important part of the loan details wasn't providing enough information and wasn't as easy to read as it should be. If you head on over there now (At the bottom of the Loan Details Page) you'll find that we've streamlined the way the information is viewed as well as expanded the amount of information provided about each payment period.`,
            <br />,
            <br />,
          ],
        },
      ],
    },

    {
      date: `Sunday, Feb 19, 2023`,
      featureData: [
        {
          title: `ACH Account Signups`,

          body: [
            `Over the last two weeks, based on user feedback, we've been working on streaming the ACH Account signup a bit. Expect to see the largest changes in the Document Upload section of the process.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Help Section`,

          body: [
            `We've begun the process of expanding our help section so you can have more FAQ's and Tutorials easily available when questions arise! In particular we've added videos on creating New Loans as well how to recreate Existing Loans on the platform.`,
            <br />,
            <br />,
          ],
        },
      ],
    },

    {
      date: `Saturday, Feb 25, 2023`,
      featureData: [
        {
          title: `Borrowers Bank Accounts`,

          body: [
            `You now have the ability to add Bank Accounts for your borrowers! We recommend you obtain written permission to do so but you now have the ability to add (and verify) banks accounts for your borrowers via the Micro Deposit process.`,
            <br />,
            <br />,
            `Note! This will still require your borrowers to have logged in and created a ACH account (First Name, Last Name, Email) as they'll have to agree to the Terms of Service. Once completed though, you'll be able to add the bank account on their behalf. This can be done in the Payment Methods section of the site. Look for more features like this in the coming weeks.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Speed!`,

          body: [
            `One of the other major updates we did this week was to improve the loading speed of the site. This will be most noticeable to those of you who have 15 or more loans. More work to come on this next week!`,
            <br />,
            <br />,
          ],
        },
      ],
    },

    {
      date: `Monday, Mar 13, 2023`,
      featureData: [
        {
          title: `Draft Loans`,

          body: [
            `You can now create Draft Loans! We've added the ability for you to save new loans you've created in a Draft Status before making them active. All plan levels (Except Full Tilt) will have a limit of 10 draft loans.`,
            <br />,
            <br />,
            `These Draft Loans will update any time you make a change but won't trigger things like Late notices. This should enable you to prepare loans ahead of time as needed or just mock up a couple different loans to see how things will look!`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Loan Filtering`,

          body: [
            `If you head on over to the All Loans page, you'll notice that we've added several features to help you filter and sort your loans. Including fully functional column sorting, filtering based on Loan Status, and the ability to search all columns and fields in the table.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Speed Boost!`,

          body: [
            `Over the last two weeks we've finished up 95% of our work around performance. You should notice a much snappier experience after the initial load of the site!`,
            <br />,
            <br />,
          ],
        },
      ],
    },

    {
      date: `Monday, Mar 20, 2023`,
      featureData: [
        {
          title: `Loan Attachments`,

          body: [
            `Your Loans are now ready to accept attachments! No matter what kind of document you need to add to your loan feel free to throw them on. All attached files can be downloaded by anyone on the loan. Lenders, Borrowers, Team Members, whoever!`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Mobile Optimization`,

          body: [
            `Around 50% of all borrowers are viewing their loans details from a mobile device. With this in mind we've made additional improvements to the site in order to make it even easier to view and manage the loan details when on a mobile device!`,
            <br />,
            <br />,
          ],
        },
      ],
    },

    {
      date: `Saturday, Mar 25, 2023`,
      featureData: [
        {
          title: `Duplicate Loans!`,

          body: [
            `You can now duplicate any existing loan! We know it can be a bit of a hassle to realize after you've just created a loan that you meant to start it in May, not in April, so we've added the ability to copy any loan you currently have when creating a new loan. It will grab all the same information you used to create the target loan and allow you to freely edit it before saving the new version. Head on over the Add New Loan page to check it out!`,
            <br />,
            <br />,
          ],
        },
      ],
    },

    {
      date: `Monday, Apr 3, 2023`,
      featureData: [
        {
          title: `Account Preferences`,

          body: [
            `We've now added the ability for Lenders save their preferred settings for things like New Loan Creation and filters on the All Loans page.`,
            <br />,
            <br />,
            `Have a standard interest rate or loan default period? No reason to keep entering it every time you create a loan. You can now setting it once and it will automatically populate every time you go to create a new loan!`,
            <br />,
            <br />,
            `Head on over the <a href="https://app.yourlandloans.com/dashboard/AccountPreferences"> Account Preferences</a> page to choose your settings!`,
            <br />,
            <br />,
          ],
        },
      ],
    },

    {
      date: `Wednesday, Apr 19, 2023`,
      featureData: [
        {
          title: `Feature Voting!`,

          body: [
            `Get ready to cast your vote for the future of the platform. We want to know what features are the most important to you guys so please take a moment and login and tell us what's important to you. The whole thing will take less than 2 minutes.`,
            <br />,
            <br />,
            `Select “Feature Feedback” from your profile button the top right or just click <a href="https://app.yourlandloans.com/dashboard/feedback"> Here!</a>`,
            <br />,
            <br />,
            `If you read through the list and don't see the feature you really wish we had, just click the “Suggest Feature” button in the top right and send us a note!`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Payment Cancelation`,

          body: [
            `Ever gotten a frantic email from your borrower asking if you could cancel a payment they just made? Now there is a solution! You (and the borrower) have the option to cancel an ACH payment after it's made but before the transfer is initiated by the processing company. Transfers are initiated around 4pm CST Monday through Friday so be sure to jump in there if a cancelation is needed!`,
            <br />,
            <br />,
            `If a cancelation is available the button will show on the right hand side of the Payment History tab.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Foreclosed Loan Status`,

          body: [
            `We've added a new Loan Status! We determined that there needed to be a way to specify if a loan wasn't just in default, but had fully defaulted and payment could no longer be made. Once you set the loan to “Foreclosed” from the Edit Loan page the borrower will no longer be able to make a payment and it will signal that the loan has fully defaulted.`,
            <br />,
            <br />,
          ],
        },
      ],
    },

    {
      date: `Friday, May 12, 2023`,
      featureData: [
        {
          title: `Automatic ACH Return Fees!`,

          body: [
            `Ask and ye shall receive! Thanks to all those who took a moment to jump into the <a href="https://app.yourlandloans.com/dashboard/feedback"> Feedback Page</a> and vote the features they wanted to see! We're using that list to prioritize features like this one!`,
            <br />,
            <br />,
            `
              Now, when an ACH payment from your borrower fails we will automatically add a One Time Fee to their loan for you. By Default we've set the amount to be charged equal to the fee we charge you. If you'd like to modify that (up or down) just head over to your <a href="https://app.yourlandloans.com/dashboard/AccountPreferences"> Account Preferences</a> Page and enter a new value!`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Refund ACH Payments`,

          body: [
            `Ever needed to send a payment back to a borrower? We've added the ability to refund an ACH payment back to the borrower. You'll see the option added under Payment History in Loan Details.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `New Credit Card Partner`,

          body: [
            `We ran into some snags with the previous Credit Card Processing Company we were using and have since launched with a new partner. This partner manages all of the payments through Authorize.net so that should provide us additional flexibility in the future.`,
            <br />,
            <br />,
            `If you'd like to get Credit Cards set up for your account just head on over to your <a href="https://app.yourlandloans.com/dashboard/paymentMethods"> Payment Methods Page!</a>`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Loan Detail Links!`,

          body: [
            `You now have the ability to share a link directly to the loan details. You'll see the link symbol to copy that down in two different places on the <a href="https://app.yourlandloans.com/dashboard/loans"> All Loans Page. </a>`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Loan Drop Down Lists`,

          body: [
            `We realized that for those of you with several loans scrolling through a big list of them was getting tedious so we've overhauled that interaction! You should now see them laid out in a card fashion that is both searchable and easier to navigate!`,
            <br />,
            <br />,
          ],
        },
      ],
    },
    {
      date: `Friday, Jun 2, 2023`,
      featureData: [
        {
          title: `Generate Payoffs`,

          body: [
            `Both you and your borrowers now have the ability to generate an
                estimate payoff breakdown at any time! Just head over to the Loan Details page and click the button.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Mobile`,

          body: [
            `We've striven from the beginning to make the site mobile friendly but there were always corner cases where things just looked a little bit... funky. We've recently finished a full review of the mobile version of the site to ensure that the mobile performance is better than ever!`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Speed Improvements`,

          body: [
            `We've been doing a lot of under the hood work the last few weeks. Part of those improvements was finishing phase 2 of our speed improvements so that the site is snappier than ever!`,
            <br />,
            <br />,
          ],
        },
      ],
    },

    {
      date: `Sunday, Jun 18, 2023`,
      featureData: [
        {
          title: `Expanded Loan Edits`,

          body: [
            `We heard the feedback that you wanted to easily edit more details about the loans and now that's ready to go! Check out any loan on the Edit Loan page to show how easy it now is to update things like Loan Names and Loan Default Dates.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `New Borrower Page!`,

          body: [
            `We've added a new page to the site that will allow you to easily review all of your borrowers in <a href="https://app.yourlandloans.com/dashboard/borrowers"> one place </a> to see things like who is ready to pay and what loans they are connected to.`,
            <br />,
            <br />,
          ],
        },
      ],
    },
    {
      date: `Friday, Jul 7, 2023`,
      featureData: [
        {
          title: `Dashboard Expansion!`,

          body: [
            `We've expanded our dashboard to include several additional analytics around your loans! It's now easier than ever to see spot trends about on about historical loan balances or average payment amounts. Log in to check it out!`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Lender to Lender Loan Transfers`,

          body: [
            `Have you ever needed to transfer a loan to another lender? With the platform it's now easier than ever. With just a few clicks you can set up a transfer for another Lender to accept all within the platform!`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Borrower Recurring Payment Skips`,

          body: [
            `From time to time borrowers need to skip a recurring payment but they don't want to cancel their scheduled payment outright. We've now added the option for borrower to go in and simply delay a scheduled payment to the next month. This should help free them up so that they can easily make those larger one time payments if they wish.`,
            <br />,
            <br />,
          ],
        },
      ],
    },
    {
      date: `Friday, Jul 21, 2023`,
      featureData: [
        {
          title: `Balloon Payments`,

          body: [
            `As always you <a href="https://app.yourlandloans.com/dashboard/feedback"> spoke</a> and we listened! Support for Balloon payments is now live. You can add this to existing loans on the <a href="https://app.yourlandloans.com/dashboard/editLoan"> Edit Loans </a>page or you can add this to any new loans you create!
              `,
            <br />,
            <br />,
          ],
        },
        {
          title: `Two Bank Accounts!`,

          body: [
            `We've had several of you reach out asking us if you could add a second bank account so that you could split your monthly expenses from your monthly loan income. We worked with our vendor to come up with a solution and now it's ready to go! If you jump over to your <a href="https://app.yourlandloans.com/dashboard/paymentMethods"> Payment Method </a> page you can now officially add a second bank account and assign which account will be used for expenses or ACH income. Profit First peeps rejoice! FYI, this option is only available to Lenders.`,
            <br />,
            <br />,
          ],
        },
      ],
    },
    {
      date: `Wednesday, Aug 23, 2023`,
      featureData: [
        {
          title: `Automated Loan Imports`,

          body: [
            `We know that moving your borrowers from one system to another can have its challenges. We want to make that process as easy as possible so we've rolled out Automated Loan Imports! This tool is available to all paid accounts and helps make the process of migrating your loans from select systems into Your Land Loans easier than ever!<a href="https://app.yourlandloans.com/dashboard/importLoans"> Check it out.</a>`,
            <br />,
            <br />,
          ],
        },
        {
          title: `10k Transaction Limits`,

          body: [
            `We noticed that some of you have monthly payments on the larger side or have users that want to make larger one time payments to help pay down their loans. We were able to work with our ACH processor to secure a bump in the transaction limit for Borrower payments from 5k to 10k!`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Payments Page`,

          body: [
            `Ever had trouble trying to map that one payment in your bank account to the correct loan? We've added an additional page to the navigation bar that will allow you review and search all your payments across all your loans in <a href="https://app.yourlandloans.com/dashboard/recentPayment"> one place!</a>`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Load Speeds`,

          body: [
            `Let's be real, for those of you with 20, 30 or 50+ loans the time it was taking to first load up all of your loan data was getting out of hand. Even though it was snappy after that we just couldn't live with that slow initial load. With some creative engineering we've been able to improve that load time by up to 10x! Enjoy`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Micro Deposit Verification`,

          body: [
            `We all have that borrower who absolutely refuses to enter their bank login in order connect their bank account instantaneously. It's cool, we get it. Our previous tool to support Micro Deposits was fine but we thought we could do better. You should now see a more integrated and streamlined experience when you or your borrowers are adding a bank account.            `,
            <br />,
            <br />,
          ],
        },
      ],
    },
    {
      date: `Wednesday, Sep 13, 2023`,
      featureData: [
        {
          title: `Payment Sharing!`,

          body: [
            `I know, I know, we've had this listed on the websites for forever as "Coming Soon!". Seriously this time though, the wait is over, it's here! If you've ever wanted to be able to share part of a note payment with a Partner or Team Member now is the time! As a Full Tilt Lender, you'll be able to specify that a percentage of any ACH payment received should be sent to one or more Partner/Team Member that you've added.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Borrower Sessions`,

          body: [
            `Here is another industry leading feature and it's available to everyone! Have you ever wanted to be able to see what your borrower is actually seeing on the website? Help with support. Clarify issues. Call BS. You can now view recorded sessions of your borrower's time on the site whenever you need to!            `,
            <br />,
            <br />,
          ],
        },
      ],
    },
    {
      date: `Wednesday, Oct 11, 2023`,
      featureData: [
        {
          title: `Borrower Assist!`,

          body: [
            `I'm not gonna lie, I've been excited about this feature for a while! Once again we've rolled out one of the top requested features. You can now help your borrowers make payments! If you hop on over to our<a href="https://app.yourlandloans.com/dashboard/borrowerAssist"> Borrower Assist</a> feature you'll see that out the gate we've started with support for borrower payments. Once the borrower has gotten the account set up you can go in and trigger one time, scheduled, or recurring payments and the borrower will be immediately be sent an email. From that email all they have to do it click "Accept" or "Reject" and the payment will be added to their loan! Expect to see more options like this added to our Assist feature in the future.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Account Email Updates`,

          body: [
            `Ever needed to change your account email or the account email of a borrower? We've rolled out support for that under the <a href="https://app.yourlandloans.com/dashboard/borrowers"> edit section</a> of each account!`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Private Loan Notes`,

          body: [
            `
              Have notes about each loan but not sure where to keep them? We've added a Private Notes section to the Loan Details page of each loan! These loan notes are shared across all the Lender and Team Member accounts.`,
            <br />,
            <br />,
          ],
        },
        {
          title: `Partner Page`,

          body: [
            `We realized with the recent payment sharing updates that Partners needed their own page to make it easier to track and manage them so now you have it!`,
            <br />,
            <br />,
          ],
        },
        {
          title: `FAQs`,

          body: [
            `In an attempt to provide additional easy to reach guidance we've added several FAQs to both the Lender and Borrower section of the site.`,
          ],
        },
      ],
    },
  ];

  // return featureUpdate;

  return (
    <>
    <div>
    {featureUpdate?.map((item) => {
    return (
    <>
    <span><b>Date: </b>{item.date}</span>
    {item?.featureData?.map((_) => {
    return (<><p><b>Title: </b>{_?.title}</p>
    <p><b>Content: </b>
    <div dangerouslySetInnerHTML={{__html: _?.body}}/> </p>
    </>);
    })}
    </>
    );
    })}
    </div>
    </>
    );
}
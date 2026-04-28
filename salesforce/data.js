const exams = [
    {
        "id": "exam_1",
        "title": "1-VisitorsAndProspects",
        "questions": [
            {
                "id": "q1",
                "text": "What is the primary function of the Account Engagement tracking code?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To send mass emails to prospects"
                    },
                    {
                        "id": "B",
                        "text": "To track visitor and prospect activities on your website and landing pages"
                    },
                    {
                        "id": "C",
                        "text": "To automatically create Salesforce campaigns"
                    },
                    {
                        "id": "D",
                        "text": "To sync custom objects with Salesforce"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "To track visitor and prospect activities on your website and landing pages The Account Engagement tracking code drops a cookie on the visitor's browser, allowing the system to track their behavior across your website and landing pages. 2. Which of the following cookies is set to maintain the session and remember table filters for logged-in users?"
            },
            {
                "id": "q2",
                "text": "Which of the following cookies is set to maintain the session and remember table filters for logged-in users?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "visitor_id"
                    },
                    {
                        "id": "B",
                        "text": "pi_opt_in"
                    },
                    {
                        "id": "C",
                        "text": "pardot"
                    },
                    {
                        "id": "D",
                        "text": "lpv"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "pardot The pardot cookie is a session cookie set when you log in as a user or when a visitor accesses a form, landing page, or page with tracking code. It denotes an active session. 3. If a visitor ignores the tracking opt-in banner, what is the value of the pi_opt_in cookie?"
            },
            {
                "id": "q3",
                "text": "If a visitor ignores the tracking opt-in banner, what is the value of the pi_opt_in cookie?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "true"
                    },
                    {
                        "id": "B",
                        "text": "false"
                    },
                    {
                        "id": "C",
                        "text": "null"
                    },
                    {
                        "id": "D",
                        "text": "The cookie is not set"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "false If a visitor opts out or ignores the opt-in banner, the pi_opt_in cookie value is set to false, and the visitor is not tracked."
            },
            {
                "id": "q4",
                "text": "A marketer wants to prevent multiple page views on a single asset from being tracked repeatedly over a 30-minute session. Which cookie handles this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "lpv"
                    },
                    {
                        "id": "B",
                        "text": "pardot"
                    },
                    {
                        "id": "C",
                        "text": "visitor_id-hash"
                    },
                    {
                        "id": "D",
                        "text": "visitor_id"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "marketer wants to prevent multiple page views on a single asset from being tracked repeatedly over a 30-minute session. Which cookie handles this?"
            },
            {
                "id": "q5",
                "text": "How does a visitor convert into a prospect in Account Engagement? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Clicking a link in an untracked email"
                    },
                    {
                        "id": "B",
                        "text": "Submitting a form"
                    },
                    {
                        "id": "C",
                        "text": "Submitting a form handler"
                    },
                    {
                        "id": "D",
                        "text": "Landing on a tracked web page"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "lpv The lpv (Last Page View) cookie is set to prevent tracking multiple page views on a single asset over a 30-minute session (e.g., refreshing the page). 5. How does a visitor convert into a prospect in Account Engagement? (Select all that apply)"
            },
            {
                "id": "q6",
                "text": "What type of list automatically adds or removes prospects based on criteria you provide?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Static List"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "C",
                        "text": "Suppression List"
                    },
                    {
                        "id": "D",
                        "text": "Test List"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Submitting a form, C. Submitting a form handler Visitors convert to prospects when they provide their email address. This typically happens by submitting a form or a form handler. Clicking a tracked link in an email also converts a visitor if the link contains their unique identifier, but the option specified \"untracked email\". 6. What type of list automatically adds or removes prospects based on criteria you provide?"
            },
            {
                "id": "q7",
                "text": "Which automation tool is a repeatable, criteria-based rule that finds matching prospects and applies actions to them continuously?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "B",
                        "text": "Completion Action"
                    },
                    {
                        "id": "C",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic List"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Dynamic List Dynamic lists are smart lists that automatically add or remove prospects based on the criteria you specify. 7. Which automation tool is a repeatable, criteria-based rule that finds matching prospects and applies actions to them continuously?"
            },
            {
                "id": "q8",
                "text": "You want to execute an action only once based on specific criteria. Which tool should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "B",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Engagement Program"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Automation Rule Automation rules are repeatable, criteria-based rules that run continuously in the background, finding matching prospects and applying actions. 8. You want to execute an action only once based on specific criteria. Which tool should you use?"
            },
            {
                "id": "q9",
                "text": "What is the relationship between Recipient Lists and Suppression Lists in an Engagement Program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They have a strict 1:1 relationship"
                    },
                    {
                        "id": "B",
                        "text": "A prospect can only be on one or the other"
                    },
                    {
                        "id": "C",
                        "text": "Suppression lists override recipient lists"
                    },
                    {
                        "id": "D",
                        "text": "Recipient lists override suppression lists"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Segmentation Rule Segmentation rules are a one-time snapshot used to pull a list of prospects and apply an action (like adding to a list) based on specific criteria at that moment. 9. What is the relationship between Recipient Lists and Suppression Lists in an Engagement Program?"
            },
            {
                "id": "q10",
                "text": "When a prospect is added to a new Engagement Program recipient list, where do they start in the program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "In the middle of the program"
                    },
                    {
                        "id": "B",
                        "text": "At the step where the majority of prospects currently are"
                    },
                    {
                        "id": "C",
                        "text": "At the beginning of the program"
                    },
                    {
                        "id": "D",
                        "text": "At the end of the program"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Suppression lists override recipient lists If a prospect is on both lists, the suppression list takes precedence, and the prospect will be suppressed from the program. 10. When a prospect is added to a new Engagement Program recipient list, where do they start in the program?"
            },
            {
                "id": "q11",
                "text": "Which of the following is true about Prospect Accounts?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They group prospects that work for the same company under the same umbrella"
                    },
                    {
                        "id": "B",
                        "text": "You can edit Salesforce prospect account fields in Account Engagement"
                    },
                    {
                        "id": "C",
                        "text": "They sync separately from the prospect sync process"
                    },
                    {
                        "id": "D",
                        "text": "Both A and C"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "At the beginning of the program When a new prospect is added to a program recipient list, they always start the program from the beginning, regardless of where other prospects are. 11. Which of the following is true about Prospect Accounts?"
            },
            {
                "id": "q12",
                "text": "When a default account field is blank in Salesforce, how does it appear on the account record in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It appears as \"Null\""
                    },
                    {
                        "id": "B",
                        "text": "It doesn't appear on the account record"
                    },
                    {
                        "id": "C",
                        "text": "It displays a default value"
                    },
                    {
                        "id": "D",
                        "text": "It creates a sync error"
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "Both A and C Prospect accounts group prospects that work for the same company under the same umbrella. Account updates sync separately from the prospect sync process. Also, prospect account fields are read-only in Account Engagement when you have a Salesforce connector. 12. When a default account field is blank in Salesforce, how does it appear on the account record in Account Engagement?"
            },
            {
                "id": "q13",
                "text": "A marketer wants to use an account's assigned user as the sender for a list email. Is this possible?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes, you can use the account owner as the \"from\" address"
                    },
                    {
                        "id": "B",
                        "text": "No, you can only use the prospect owner"
                    },
                    {
                        "id": "C",
                        "text": "Yes, but only for automated emails"
                    },
                    {
                        "id": "D",
                        "text": "No, emails must be sent from a general address"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "It doesn't appear on the account record Default account fields that are blank in Salesforce do not appear on the account record in Account Engagement."
            },
            {
                "id": "q14",
                "text": "If a custom field doesn't capture the prospect account data needed, what should the admin do first to sync this data?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create the custom field in Account Engagement and map it to the Salesforce account field"
                    },
                    {
                        "id": "B",
                        "text": "Map a default field to the custom Salesforce field"
                    },
                    {
                        "id": "C",
                        "text": "Contact Salesforce support to enable custom account fields"
                    },
                    {
                        "id": "D",
                        "text": "Create a new custom object for the account"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "marketer wants to use an account's assigned user as the sender for a list email. Is this possible?"
            },
            {
                "id": "q15",
                "text": "What must be true for an account record to sync from Salesforce to Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It must have an active opportunity"
                    },
                    {
                        "id": "B",
                        "text": "It must be linked to a prospect record that is syncing with a Salesforce contact"
                    },
                    {
                        "id": "C",
                        "text": "It must have a billing address"
                    },
                    {
                        "id": "D",
                        "text": "It must be owned by an active user"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Yes, you can use the account owner as the \"from\" address The documentation states, \"You can use an account\u2019s assigned user as the from address in list emails.\" 14. If a custom field doesn't capture the prospect account data needed, what should the admin do first to sync this data?"
            },
            {
                "id": "q16",
                "text": "Which automation tool is triggered immediately when a prospect submits a form, clicks a custom redirect, or downloads a file?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Completion Action"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic List"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Create the custom field in Account Engagement and map it to the Salesforce account field The admin must create the custom account field in Account Engagement and map it to the corresponding Salesforce account field. 15. What must be true for an account record to sync from Salesforce to Account Engagement?"
            },
            {
                "id": "q17",
                "text": "What type of list is built once and must be edited manually to make changes?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Suppression List"
                    },
                    {
                        "id": "B",
                        "text": "Static List"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "D",
                        "text": "Recipient List"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "It must be linked to a prospect record that is syncing with a Salesforce contact For an account record to sync, it must be linked to a prospect record that is actively syncing with a Salesforce contact. 16. Which automation tool is triggered immediately when a prospect submits a form, clicks a custom redirect, or downloads a file?"
            },
            {
                "id": "q18",
                "text": "What does the visitor_id-hash cookie do?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Tracks the visitor's location"
                    },
                    {
                        "id": "B",
                        "text": "Acts as a security measure to prevent a malicious user from faking a visitor"
                    },
                    {
                        "id": "C",
                        "text": "Stores the visitor's form field values"
                    },
                    {
                        "id": "D",
                        "text": "Tracks the visitor's page views"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Completion Action Completion actions are actions that enable you to automate directly from a marketing element immediately upon completion. 17. What type of list is built once and must be edited manually to make changes?"
            },
            {
                "id": "q19",
                "text": "Are prospect account fields read-only in Account Engagement when you have a Salesforce connector?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes"
                    },
                    {
                        "id": "B",
                        "text": "No"
                    },
                    {
                        "id": "C",
                        "text": "Only default fields are read-only"
                    },
                    {
                        "id": "D",
                        "text": "Only custom fields are read-only"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Static List Static lists are lists of prospects that you build once and edit manually to add or remove prospects. 18. What does the visitor_id-hash cookie do?"
            },
            {
                "id": "q20",
                "text": "Which feature allows unsubscribed prospects to opt back into email communications via a form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Automated Prospect Resubscribe"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "C",
                        "text": "Form Handlers"
                    },
                    {
                        "id": "D",
                        "text": "Custom Redirects"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Acts as a security measure to prevent a malicious user from faking a visitor The visitor_id-hash cookie is a security measure that stores a unique hash to ensure a malicious user cannot fake a visitor and access corresponding prospect information. 19. Are prospect account fields read-only in Account Engagement when you have a Salesforce connector?"
            },
            {
                "id": "q21",
                "text": "To use the Automated Prospect Resubscribe feature, what must be enabled for the business unit?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Advanced Analytics"
                    },
                    {
                        "id": "B",
                        "text": "Handlebars Merge Language (HML)"
                    },
                    {
                        "id": "C",
                        "text": "Connected Campaigns"
                    },
                    {
                        "id": "D",
                        "text": "Person Accounts"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Yes When you have a Salesforce connector, prospect account fields are read-only in Account Engagement. They must be managed in Salesforce. 20. Which feature allows unsubscribed prospects to opt back into email communications via a form?"
            },
            {
                "id": "q22",
                "text": "Where do marketing users customize the resubscribe messaging for a specific form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "On the Account Settings page"
                    },
                    {
                        "id": "B",
                        "text": "On the form's Resubscribe tab"
                    },
                    {
                        "id": "C",
                        "text": "In the email template editor"
                    },
                    {
                        "id": "D",
                        "text": "In the Salesforce connector settings"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Automated Prospect Resubscribe Automated Prospect Resubscribe allows an opted-out prospect to click a link on a form to receive a resubscribe email and opt back in. 21. To use the Automated Prospect Resubscribe feature, what must be enabled for the business unit?"
            },
            {
                "id": "q23",
                "text": "Can an admin disable the automated prospect resubscribe feature for a particular form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes, by deselecting the \"Give unsubscribed prospects the chance to resubscribe\" checkbox"
                    },
                    {
                        "id": "B",
                        "text": "No, it is enabled globally for all forms"
                    },
                    {
                        "id": "C",
                        "text": "Yes, but only via a custom script"
                    },
                    {
                        "id": "D",
                        "text": "No, it requires a support ticket"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Handlebars Merge Language (HML) Handlebars Merge Language (HML) must be enabled for the business unit to use the Automated Prospect Resubscribe feature. 22. Where do marketing users customize the resubscribe messaging for a specific form?"
            },
            {
                "id": "q24",
                "text": "When using first-party and third-party cookies together, what is the primary purpose of the third-party cookie?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To track users across different websites"
                    },
                    {
                        "id": "B",
                        "text": "For redundancy"
                    },
                    {
                        "id": "C",
                        "text": "To store personally identifying information"
                    },
                    {
                        "id": "D",
                        "text": "To improve page load speed"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "On the form's Resubscribe tab When editing a form, users can customize the resubscribe messaging on the Resubscribe tab. 23. Can an admin disable the automated prospect resubscribe feature for a particular form?"
            },
            {
                "id": "q25",
                "text": "If a visitor views a tracked page but does not convert to a prospect, what data does Account Engagement store?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Their email address"
                    },
                    {
                        "id": "B",
                        "text": "A unique identifier in a cookie"
                    },
                    {
                        "id": "C",
                        "text": "Their Salesforce Contact ID"
                    },
                    {
                        "id": "D",
                        "text": "Their prospect score"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Yes, by deselecting the \"Give unsubscribed prospects the chance to resubscribe\" checkbox The feature can be disabled for individual forms by deselecting the corresponding checkbox on the Resubscribe tab. 24. When using first-party and third-party cookies together, what is the primary purpose of the third-party cookie?"
            },
            {
                "id": "q26",
                "text": "Which scenario is best suited for an Automation Rule?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Sending an autoresponder email immediately after a form submission"
                    },
                    {
                        "id": "B",
                        "text": "Adding prospects to a list based on their industry and title continuously"
                    },
                    {
                        "id": "C",
                        "text": "Removing prospects from a list one time for a specific campaign"
                    },
                    {
                        "id": "D",
                        "text": "Changing a prospect's score based on a single email click"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "For redundancy Account Engagement sets first-party cookies for tracking purposes and third-party cookies for redundancy. 25. If a visitor views a tracked page but does not convert to a prospect, what data does Account Engagement store?"
            },
            {
                "id": "q27",
                "text": "Which scenario is best suited for a Segmentation Rule?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Running a one-time evaluation to assign prospects to a list based on criteria"
                    },
                    {
                        "id": "B",
                        "text": "Automatically emailing a prospect when their score reaches 100"
                    },
                    {
                        "id": "C",
                        "text": "Sending a series of emails over several weeks"
                    },
                    {
                        "id": "D",
                        "text": "Adjusting a prospect's grade continuously as field data changes"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "A unique identifier in a cookie Account Engagement tracks visitors based on a unique identifier (like visitor_id12345) stored in a cookie. No personally identifying information is stored until they convert. 26. Which scenario is best suited for an Automation Rule?"
            },
            {
                "id": "q28",
                "text": "Which scenario is best suited for a Dynamic List?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Creating a list for an Engagement Program that automatically updates as prospects meet or fail to meet criteria"
                    },
                    {
                        "id": "B",
                        "text": "Creating a list of prospects who attended a webinar last year to use as a static reference"
                    },
                    {
                        "id": "C",
                        "text": "Triggering an alert to sales when a prospect views the pricing page"
                    },
                    {
                        "id": "D",
                        "text": "Sending a notification to marketing when a form is submitted"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Adding prospects to a list based on their industry and title continuously Automation rules run continuously and are perfect for criteria-based actions that need to apply to prospects as they meet the criteria over time. 27. Which scenario is best suited for a Segmentation Rule?"
            },
            {
                "id": "q29",
                "text": "Which scenario is best suited for a Completion Action?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Adjusting a prospect's score based on their job title"
                    },
                    {
                        "id": "B",
                        "text": "Adding a prospect to a list when they click a specific link in an email"
                    },
                    {
                        "id": "C",
                        "text": "Automatically assigning prospects to sales based on territory routing rules"
                    },
                    {
                        "id": "D",
                        "text": "Creating a list of all prospects who live in California"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Running a one-time evaluation to assign prospects to a list based on criteria Segmentation rules are one-time executions based on specific criteria. 28. Which scenario is best suited for a Dynamic List?"
            },
            {
                "id": "q30",
                "text": "What happens if a prospect matches the criteria of an Automation Rule multiple times, but the rule is NOT set to repeat?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The actions are applied each time they match"
                    },
                    {
                        "id": "B",
                        "text": "The actions are only applied the first time they match"
                    },
                    {
                        "id": "C",
                        "text": "The rule is paused automatically"
                    },
                    {
                        "id": "D",
                        "text": "The prospect is marked as a duplicate"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Creating a list for an Engagement Program that automatically updates as prospects meet or fail to meet criteria Dynamic lists automatically update and are responsive, making them the ideal choice to feed Engagement Programs. 29. Which scenario is best suited for a Completion Action?"
            },
            {
                "id": "q31",
                "text": "You want to send a nurture email series to prospects who expressed interest in a specific product. Which tool provides customizable and conditional steps for this purpose?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Autoresponder Rules"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rules"
                    },
                    {
                        "id": "C",
                        "text": "Engagement Programs"
                    },
                    {
                        "id": "D",
                        "text": "Segmentation Rules"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Adding a prospect to a list when they click a specific link in an email Completion actions are triggered immediately by a prospect's interaction with a marketing asset (like an email click). 30. What happens if a prospect matches the criteria of an Automation Rule multiple times, but the rule is NOT set to repeat?"
            },
            {
                "id": "q32",
                "text": "True or False: Account Engagement cookies store personally identifying information.",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "True"
                    },
                    {
                        "id": "B",
                        "text": "False"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The actions are only applied the first time they match Unless an automation rule is set to repeat, a prospect will only match the rule and have the actions applied one time, even if they meet the criteria again in the future. 31. You want to send a nurture email series to prospects who expressed interest in a specific product. Which tool provides customizable and conditional steps for this purpose?"
            },
            {
                "id": "q33",
                "text": "What is the recommended order of operations when setting up automation tools?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Setup Dynamic Lists first, then Completion Actions"
                    },
                    {
                        "id": "B",
                        "text": "Setup tools for any scenario (Completion Actions, Automation Rules) first, then configure audience segmentation tools (Dynamic Lists, Segmentation Rules)"
                    },
                    {
                        "id": "C",
                        "text": "Setup Engagement Programs first, then Dynamic Lists"
                    },
                    {
                        "id": "D",
                        "text": "The order does not matter"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Engagement Programs Engagement Programs provide customizable and conditional steps that prospects enter into through Engagement Studio for lead nurturing. 32. True or False: Account Engagement cookies store personally identifying information."
            },
            {
                "id": "q34",
                "text": "Which of the following can be used to suppress prospects from receiving an Engagement Program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic Lists"
                    },
                    {
                        "id": "B",
                        "text": "Static Lists"
                    },
                    {
                        "id": "C",
                        "text": "Both Dynamic and Static Lists"
                    },
                    {
                        "id": "D",
                        "text": "Neither"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "False Account Engagement cookies do not store personally identifying information; they only store a unique identifier. 33. What is the recommended order of operations when setting up automation tools?"
            },
            {
                "id": "q35",
                "text": "If a prospect is on both the recipient list and the suppression list for an Engagement Program, what happens?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They receive the emails"
                    },
                    {
                        "id": "B",
                        "text": "They do not receive the emails"
                    },
                    {
                        "id": "C",
                        "text": "The program errors out"
                    },
                    {
                        "id": "D",
                        "text": "They receive half of the emails"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Setup tools for any scenario (Completion Actions, Automation Rules) first, then configure audience segmentation tools (Dynamic Lists, Segmentation Rules) The documentation advises configuring broad automation tools first, followed by specific segmentation tools. 34. Which of the following can be used to suppress prospects from receiving an Engagement Program?"
            },
            {
                "id": "q36",
                "text": "Can you use account fields in automation and segmentation rules?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes"
                    },
                    {
                        "id": "B",
                        "text": "No"
                    },
                    {
                        "id": "C",
                        "text": "Only default account fields"
                    },
                    {
                        "id": "D",
                        "text": "Only custom account fields"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Both Dynamic and Static Lists Suppression lists can be either static or dynamic lists. 35. If a prospect is on both the recipient list and the suppression list for an Engagement Program, what happens?"
            },
            {
                "id": "q37",
                "text": "When mapping a new custom prospect account field, how do you update all existing field values?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They sync automatically"
                    },
                    {
                        "id": "B",
                        "text": "Trigger a full sync"
                    },
                    {
                        "id": "C",
                        "text": "Export and re-import the prospects"
                    },
                    {
                        "id": "D",
                        "text": "Run a segmentation rule"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "They do not receive the emails Suppression lists supersede recipient lists. If a prospect is on the suppression list, they are excluded from the program. 36. Can you use account fields in automation and segmentation rules?"
            },
            {
                "id": "q38",
                "text": "What level of permission is required to create custom prospect account fields?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Marketing user"
                    },
                    {
                        "id": "B",
                        "text": "Sales user"
                    },
                    {
                        "id": "C",
                        "text": "Account Engagement Administrator"
                    },
                    {
                        "id": "D",
                        "text": "Any user role"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Yes Account fields (both default and custom) can be used as criteria in automation and segmentation rules. 37. When mapping a new custom prospect account field, how do you update all existing field values?"
            },
            {
                "id": "q39",
                "text": "Can Account Engagement override the company field value if a prospect is associated with an account in Salesforce?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes, if the sync behavior is set to \"Account Engagement's value wins\""
                    },
                    {
                        "id": "B",
                        "text": "No, regardless of the field's sync behavior"
                    },
                    {
                        "id": "C",
                        "text": "Yes, but only for custom fields"
                    },
                    {
                        "id": "D",
                        "text": "No, unless the prospect is unassigned"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Trigger a full sync When mapping a new custom field, Salesforce account field values don't sync automatically. To update all field values, you must trigger a full sync. 38. What level of permission is required to create custom prospect account fields?"
            },
            {
                "id": "q40",
                "text": "A marketer wants to track visitors on a site that does not have a tracker subdomain configured. Which type of cookie is used?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "First-party cookies"
                    },
                    {
                        "id": "B",
                        "text": "Third-party cookies on HTTPS pages"
                    },
                    {
                        "id": "C",
                        "text": "Both first and third-party cookies"
                    },
                    {
                        "id": "D",
                        "text": "No tracking occurs"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Account Engagement Administrator The Account Engagement Administrator role is required to create custom prospect account fields. 39. Can Account Engagement override the company field value if a prospect is associated with an account in Salesforce?"
            },
            {
                "id": "q41",
                "text": "What is the purpose of the visitor_id<accountid> cookie?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To maintain an active login session"
                    },
                    {
                        "id": "B",
                        "text": "To prevent multiple page view tracking"
                    },
                    {
                        "id": "C",
                        "text": "To store a unique visitor ID and ensure the visitor is tracked on the correct business unit"
                    },
                    {
                        "id": "D",
                        "text": "To track opt-in preferences"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "No, regardless of the field's sync behavior When a prospect is associated with an account in Salesforce, the value for the company field comes from the account, and Account Engagement cannot override it."
            },
            {
                "id": "q42",
                "text": "Which tool is used to group prospects that work for the same company under a single entity?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Prospect Lists"
                    },
                    {
                        "id": "B",
                        "text": "Connected Campaigns"
                    },
                    {
                        "id": "C",
                        "text": "Prospect Accounts"
                    },
                    {
                        "id": "D",
                        "text": "Campaigns"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "marketer wants to track visitors on a site that does not have a tracker subdomain configured. Which type of cookie is used?"
            },
            {
                "id": "q43",
                "text": "Which of the following is NOT a common segmentation marker used to build an audience?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Geographic location"
                    },
                    {
                        "id": "B",
                        "text": "Job title"
                    },
                    {
                        "id": "C",
                        "text": "Company size"
                    },
                    {
                        "id": "D",
                        "text": "Operating system"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Third-party cookies on HTTPS pages If a tracker subdomain is not configured, Account Engagement uses third-party cookies on HTTPS pages. 41. What is the purpose of the visitor_id<accountid> cookie?"
            },
            {
                "id": "q44",
                "text": "What is the main benefit of using Dynamic Lists for Engagement Programs?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They allow for manual editing"
                    },
                    {
                        "id": "B",
                        "text": "They are responsive and automatically update based on changing prospect information"
                    },
                    {
                        "id": "C",
                        "text": "They execute actions based on form submissions"
                    },
                    {
                        "id": "D",
                        "text": "They are the only list type supported"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "To store a unique visitor ID and ensure the visitor is tracked on the correct business unit The visitor cookie includes a unique visitor ID and the unique identifier for your business unit. 42. Which tool is used to group prospects that work for the same company under a single entity?"
            },
            {
                "id": "q45",
                "text": "Which automation tool is retrospective, meaning it can apply to past activities?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Automation Rules"
                    },
                    {
                        "id": "B",
                        "text": "Completion Actions"
                    },
                    {
                        "id": "C",
                        "text": "Autoresponders"
                    },
                    {
                        "id": "D",
                        "text": "Page Actions"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Prospect Accounts Prospect accounts group prospects that work for the same company under the same umbrella. 43. Which of the following is NOT a common segmentation marker used to build an audience?"
            },
            {
                "id": "q46",
                "text": "If a prospect's field value changes, and they no longer meet the criteria of a Dynamic List, what happens?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They remain on the list"
                    },
                    {
                        "id": "B",
                        "text": "They are automatically removed from the list"
                    },
                    {
                        "id": "C",
                        "text": "They are moved to a suppression list"
                    },
                    {
                        "id": "D",
                        "text": "The admin receives an alert"
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "Operating system Common segmentation markers include geographic location, job title, and company size based on the Trailhead module. Operating system is generally tracked but not heavily used as a primary segmentation marker for list building. 44. What is the main benefit of using Dynamic Lists for Engagement Programs?"
            },
            {
                "id": "q47",
                "text": "Can a prospect be added to an Engagement Program after it has already started?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes, and they will start from the beginning of the program"
                    },
                    {
                        "id": "B",
                        "text": "Yes, and they will start at the current active step"
                    },
                    {
                        "id": "C",
                        "text": "No, they must wait for the next program"
                    },
                    {
                        "id": "D",
                        "text": "No, they must be added before the program starts"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "They are responsive and automatically update based on changing prospect information Dynamic lists automatically add or remove prospects based on criteria, making them highly responsive for nurture programs. 45. Which automation tool is retrospective, meaning it can apply to past activities?"
            },
            {
                "id": "q48",
                "text": "What type of list is used to ensure certain prospects never receive a specific email communication?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Target List"
                    },
                    {
                        "id": "B",
                        "text": "Recipient List"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "D",
                        "text": "Suppression List"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Automation Rules Automation rules evaluate the entire database against criteria, including past activities, whereas completion actions only apply point-forward. 46. If a prospect's field value changes, and they no longer meet the criteria of a Dynamic List, what happens?"
            },
            {
                "id": "q49",
                "text": "A prospect clicks a link in a tracked list email. What happens in their record?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A Completion Action is triggered (if configured)"
                    },
                    {
                        "id": "B",
                        "text": "Their score is adjusted based on the baseline scoring rules"
                    },
                    {
                        "id": "C",
                        "text": "The activity is recorded in their prospect history"
                    },
                    {
                        "id": "D",
                        "text": "All of the above"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "They are automatically removed from the list Dynamic lists constantly evaluate prospects. If a prospect no longer meets the criteria, they are automatically removed. 47. Can a prospect be added to an Engagement Program after it has already started?"
            },
            {
                "id": "q50",
                "text": "Which is a valid method for a visitor to opt-in to tracking?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Clicking \"Accept\" on the tracking opt-in banner"
                    },
                    {
                        "id": "B",
                        "text": "Submitting a form"
                    },
                    {
                        "id": "C",
                        "text": "Both A and B"
                    },
                    {
                        "id": "D",
                        "text": "Neither A nor B"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Yes, and they will start from the beginning of the program You can always add new prospects to an engagement program, and they will always start the program from the beginning. 48. What type of list is used to ensure certain prospects never receive a specific email communication?"
            }
        ]
    },
    {
        "id": "exam_2",
        "title": "2-Administration",
        "questions": [
            {
                "id": "q1",
                "text": "A Salesforce Admin is configuring the Connector User for Account Engagement. They want to ensure the Connector User has the correct permissions for the Leads object in Salesforce. Based on the documentation, what field permissions must be granted?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Read only"
                    },
                    {
                        "id": "B",
                        "text": "All standard and custom fields syncing with Account Engagement"
                    },
                    {
                        "id": "C",
                        "text": "Create/Read/Edit"
                    },
                    {
                        "id": "D",
                        "text": "View All Records"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "To give a user access to Account Engagement data in Salesforce, the admin must apply the Account Engagement permission set included with the AppExchange package to that user."
            },
            {
                "id": "q2",
                "text": "Cloudy Computing's Account Engagement instance was provisioned recently. A new prospect is created in Account Engagement with an email address that belongs to an existing prospect. How is the \"allow multiple prospects with the same email address\" setting configured for their account?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It is disabled by default and cannot be enabled."
                    },
                    {
                        "id": "B",
                        "text": "It is enabled by default and cannot be disabled."
                    },
                    {
                        "id": "C",
                        "text": "It is disabled by default but can be enabled by an administrator."
                    },
                    {
                        "id": "D",
                        "text": "It is enabled by default but can be disabled by contacting Salesforce Customer Support."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "When an Account Engagement business unit is provisioned with the v2 connector, it is created in a paused state. Records will not sync until an administrator configures settings and unpauses it."
            },
            {
                "id": "q3",
                "text": "An admin wants to automatically manage users with access to both Salesforce and Account Engagement. They want to map Salesforce profiles to Account Engagement user roles to save time. What feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Active Assignment Rules"
                    },
                    {
                        "id": "B",
                        "text": "Salesforce Single Sign-on"
                    },
                    {
                        "id": "C",
                        "text": "Salesforce User Sync"
                    },
                    {
                        "id": "D",
                        "text": "Marketing Data Sharing"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Marketing Data Sharing allows an administrator to control and restrict which records are shared and synced between Salesforce and Account Engagement when using the v2 connector."
            },
            {
                "id": "q4",
                "text": "Leung has just configured the Salesforce-Account Engagement connector. She notices that existing leads and contacts in Salesforce have not automatically created corresponding prospects in Account Engagement. What must she do to establish the initial sync for these existing records?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Unpause the connector and wait 10-15 minutes."
                    },
                    {
                        "id": "B",
                        "text": "Click the \"Sync All Prospects\" button in Account Engagement."
                    },
                    {
                        "id": "C",
                        "text": "Import the existing leads and contacts into Account Engagement via a CSV file."
                    },
                    {
                        "id": "D",
                        "text": "Click \"Send to Account Engagement\" on each record individually."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "As a safety feature, the Salesforce-Account Engagement connector does not automatically create prospects from existing Salesforce leads and contacts. The administrator must first import them via a CSV file to establish the initial sync."
            },
            {
                "id": "q5",
                "text": "An administrator wants to ensure that when a lead in Salesforce (originally generated by Account Engagement) is converted to a contact, all Account Engagement data passes successfully to the contact record. What must the administrator do in Salesforce?",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Add custom Account Engagement buttons to Salesforce Page Layouts"
                    },
                    {
                        "id": "B",
                        "text": "Map Account Engagement custom lead fields to contact fields"
                    },
                    {
                        "id": "C",
                        "text": "Apply the Account Engagement permission set to the user"
                    },
                    {
                        "id": "D",
                        "text": "Set up Marketing Data Sharing"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "C"
                ],
                "explanation": "Salesforce User Sync streamlines user management by mapping Salesforce profiles to Account Engagement user roles. It also manages most synced user fields from Salesforce, eliminating the need to update user records in both systems."
            },
            {
                "id": "q6",
                "text": "After setting up the connector, a marketer wants to test if a new prospect syncs with an existing Salesforce record. They create a prospect in Account Engagement that matches a CRM lead. What are two ways to confirm the record syncs? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Click \"Sync with CRM\" on the prospect record."
                    },
                    {
                        "id": "B",
                        "text": "Wait 10-15 minutes to see if the connector initiates the sync."
                    },
                    {
                        "id": "C",
                        "text": "Click \"Send to Account Engagement\" on the Salesforce record."
                    },
                    {
                        "id": "D",
                        "text": "Check the sync error queue."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "The \"Send to Account Engagement\" custom button makes it easy to add Salesforce leads or contacts to Account Engagement manually. If a corresponding record doesn't exist, it creates a new prospect."
            },
            {
                "id": "q7",
                "text": "A marketer wants to import a list of prospects that contains role-based email addresses (e.g., info@company.com) for a legitimate business reason. What action must they take to allow importing and sending to these email addresses?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Contact Salesforce Customer Support to lift the restriction."
                    },
                    {
                        "id": "B",
                        "text": "Enable \"Allow role-based email addresses\" in Account Engagement settings."
                    },
                    {
                        "id": "C",
                        "text": "Select the \"Bypass Spam Filters\" checkbox during the import process."
                    },
                    {
                        "id": "D",
                        "text": "Map the email addresses to a custom field instead of the default Email field."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "If a prospect doesn\u2019t have a CRM ID but has an email address that matches multiple records in Salesforce, Account Engagement syncs with the first record it finds in Salesforce with that email address."
            },
            {
                "id": "q8",
                "text": "When configuring the connector user permissions, the admin needs to grant permissions for the ObjectChangeLogs standard object. Which object permissions are required? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Create"
                    },
                    {
                        "id": "B",
                        "text": "View All Records"
                    },
                    {
                        "id": "C",
                        "text": "Modify All Records"
                    },
                    {
                        "id": "D",
                        "text": "Delete"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Because role-based email addresses (like info@ or sales@) often represent multiple recipients and are more likely to generate spam complaints, Account Engagement restricts importing and sending to these email addresses by default to protect sending reputation."
            },
            {
                "id": "q9",
                "text": "An admin is setting up the Salesforce connector version 2. The connector is currently paused. They want to selectively sync only a subset of records between Salesforce and Account Engagement using the integration user. What should they configure before unpausing the connector?",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Salesforce User Sync"
                    },
                    {
                        "id": "B",
                        "text": "Marketing Data Sharing"
                    },
                    {
                        "id": "C",
                        "text": "Active Assignment Rules"
                    },
                    {
                        "id": "D",
                        "text": "Form Field Progressive Profiling"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "D"
                ],
                "explanation": "When permanently deleting a prospect, the associated engagement data is removed, which impacts all reporting. Additionally, associated leads and contacts must be deleted from Salesforce before the prospect is permanently deleted in Account Engagement to prevent recreation."
            },
            {
                "id": "q10",
                "text": "A marketer deletes a campaign in Account Engagement. What happens to the prospects associated with that deleted campaign?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are moved to the recycle bin along with the campaign."
                    },
                    {
                        "id": "B",
                        "text": "They are permanently deleted from Account Engagement."
                    },
                    {
                        "id": "C",
                        "text": "They remain in the system tagged with the deleted campaign."
                    },
                    {
                        "id": "D",
                        "text": "Their campaign field is cleared, and they become unassigned."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The Account Engagement Connector user must be granted field permissions to view and edit \"All standard and custom fields syncing with Account Engagement\" for objects like Accounts, Contacts, and Leads to ensure data flows correctly."
            },
            {
                "id": "q11",
                "text": "An admin permanently deletes a prospect from the Account Engagement recycle bin. What step must they also take to ensure the prospect isn't recreated during a future sync?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Permanently delete the prospect's custom fields."
                    },
                    {
                        "id": "B",
                        "text": "Delete associated leads and contacts in Salesforce."
                    },
                    {
                        "id": "C",
                        "text": "Remove the prospect's tags from the recycle bin."
                    },
                    {
                        "id": "D",
                        "text": "Turn off \"Automatically create prospects in Pardot if they are created as a Lead or Contact in Salesforce\"."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Account Engagement comes with four default user roles: Administrator, Marketing User, Sales Manager, and Sales User. \"Content Creator\" is not a default user role."
            },
            {
                "id": "q12",
                "text": "Leung needs to capture RSVPs for a client event in a custom field on the prospect record. She wants to ensure prospects can only select \"Yes, I\u2019ll be there!\" or \"No, I can\u2019t come.\" to limit the responses. Which field type should she select when creating the custom field?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Text"
                    },
                    {
                        "id": "B",
                        "text": "Radio Button"
                    },
                    {
                        "id": "C",
                        "text": "Multi-Select"
                    },
                    {
                        "id": "D",
                        "text": "TextArea"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Enabling the setting \"Keep this field\u2019s type and possible values in sync with the CRM\" ensures that any field setting changes (like picklist options) sync directly from Salesforce to Account Engagement."
            },
            {
                "id": "q13",
                "text": "A marketer is mapping custom prospect fields to Salesforce fields. They want to map a number type field in Account Engagement to a phone type field in Salesforce. Based on best practices, how should they handle this mapping?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Map the number field to the phone field directly since they both contain numbers."
                    },
                    {
                        "id": "B",
                        "text": "Map the Salesforce phone type field to a text type field in Account Engagement instead."
                    },
                    {
                        "id": "C",
                        "text": "Use a formula field in Salesforce to convert the phone field to a number."
                    },
                    {
                        "id": "D",
                        "text": "Set the sync behavior to use the Account Engagement value."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "A prospect\u2019s score is a numerical value indicating how interested they are in your product or service. The score can increase or decrease based on how they interact with your marketing materials."
            },
            {
                "id": "q14",
                "text": "To map a custom field on both the lead object and contact object in Salesforce to the same Account Engagement field, what must be true about the Salesforce fields?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They must be added to the same page layout."
                    },
                    {
                        "id": "B",
                        "text": "They must have the same label."
                    },
                    {
                        "id": "C",
                        "text": "The API name of the Salesforce fields must be identical."
                    },
                    {
                        "id": "D",
                        "text": "They must have the same sync behavior setting."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Prospect grade is represented by a letter (A, B, C, D, etc.) and indicates how closely a prospect fits the profile of your ideal prospect, regardless of their activity level."
            },
            {
                "id": "q15",
                "text": "A custom prospect field has its sync behavior set to \"Use Salesforce's value\". The field in Salesforce is currently empty, but the Account Engagement field contains the value \"ABC\". What happens when the records sync?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The Account Engagement field value is overwritten and becomes empty."
                    },
                    {
                        "id": "B",
                        "text": "The \"ABC\" field value overwrites the empty value in Salesforce."
                    },
                    {
                        "id": "C",
                        "text": "A sync error is generated."
                    },
                    {
                        "id": "D",
                        "text": "The system pauses the sync for that specific field."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "During the installation wizard for the Account Engagement AppExchange application, administrators are instructed to select \"Grant access to admins only.\""
            },
            {
                "id": "q16",
                "text": "An administrator is configuring the sync behavior for the default Opted Out field. Which sync behavior option is recommended by Account Engagement documentation for this field?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use Account Engagement's value"
                    },
                    {
                        "id": "B",
                        "text": "Use Salesforce's value"
                    },
                    {
                        "id": "C",
                        "text": "Use the most recently updated field"
                    },
                    {
                        "id": "D",
                        "text": "Use the most recently updated record"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "A deleted prospect sitting in the Account Engagement recycle bin will be automatically restored if the Salesforce record it is syncing with is undeleted in Salesforce."
            },
            {
                "id": "q17",
                "text": "A business unit does not allow multiple prospects with the same email address. The \"Automatically change emails in Account Engagement to reflect changes in Salesforce\" setting is NOT enabled. If an admin updates a lead's email address in Salesforce, what is the default behavior in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The corresponding prospect's email address is updated."
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement creates a new prospect record with the new email address."
                    },
                    {
                        "id": "C",
                        "text": "The sync is paused until the email is manually updated in Account Engagement."
                    },
                    {
                        "id": "D",
                        "text": "A sync error is placed in the queue."
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "In Account Engagement, campaigns are assigned to every prospect to tell you the first marketing-related contact they had with your company."
            },
            {
                "id": "q18",
                "text": "A sales rep deletes a synced lead in Salesforce. What happens to the corresponding prospect record in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect is permanently deleted."
                    },
                    {
                        "id": "B",
                        "text": "The prospect is flagged as [[crm_deleted]] and sent to the Account Engagement recycle bin."
                    },
                    {
                        "id": "C",
                        "text": "The prospect's email address is cleared."
                    },
                    {
                        "id": "D",
                        "text": "The prospect's score is reset to zero."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Opportunity activities are included in Account Engagement's default scoring rules. A prospect automatically receives +50 points when a related opportunity is created."
            },
            {
                "id": "q19",
                "text": "A prospect completes a form on a landing page, generating a score increase. Later, they view three different pages on the website. Which of these activities will trigger a sync from Account Engagement to Salesforce? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Form submission"
                    },
                    {
                        "id": "B",
                        "text": "Receiving an email"
                    },
                    {
                        "id": "C",
                        "text": "Page views"
                    },
                    {
                        "id": "D",
                        "text": "Landing page submission"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "If a company does not use Salesforce User Sync, Salesforce single sign-on is required for users to be able to access Account Engagement."
            },
            {
                "id": "q20",
                "text": "A marketer wants to keep a form short but gather specific information based on user choices. They want a \"State\" field to appear only if the prospect selects \"USA\" in the \"Country\" field. Which feature should they use when editing the \"Country\" field?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "B",
                        "text": "Validate on Import"
                    },
                    {
                        "id": "C",
                        "text": "Dependent Form Fields"
                    },
                    {
                        "id": "D",
                        "text": "Always display even if previously completed"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "To explicitly limit responses to preset options (like \"Yes\" or \"No\"), a Radio Button field type should be selected when creating a custom prospect field."
            },
            {
                "id": "q21",
                "text": "A marketing team wants to gather more prospect data over time without making their initial forms too long. They want to show a \"Job Title\" field only if the prospect has already provided their \"Company\" on a previous form. Which feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dependent Form Fields"
                    },
                    {
                        "id": "B",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "C",
                        "text": "Hidden Fields"
                    },
                    {
                        "id": "D",
                        "text": "Use pre-defined values"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Syncs between Salesforce and Account Engagement can occur as frequently as every 2 minutes, though large data volumes may increase sync times."
            },
            {
                "id": "q22",
                "text": "To prevent fake signups, a marketer wants to ensure prospects enter valid email addresses that are not from free email providers (like Gmail or Hotmail). What data format validation option should they select for the email field on their form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Valid email address syntax"
                    },
                    {
                        "id": "B",
                        "text": "Email with valid mail server"
                    },
                    {
                        "id": "C",
                        "text": "Email not from ISPs and free email providers"
                    },
                    {
                        "id": "D",
                        "text": "No validation required"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Both list emails and one-to-one emails sent via Account Engagement are recorded directly in the activity section of the corresponding CRM record in Salesforce."
            },
            {
                "id": "q23",
                "text": "An admin wants to keep a specific group of prospects from syncing with Salesforce records that have matching email addresses. They decide to set up an automation rule to accomplish this. What action should the automation rule use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Do not sync with CRM"
                    },
                    {
                        "id": "B",
                        "text": "Assign to user"
                    },
                    {
                        "id": "C",
                        "text": "Adjust prospect score to 0"
                    },
                    {
                        "id": "D",
                        "text": "Delete prospect"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Items that have been moved to the Account Engagement recycle bin do not count toward your account's usage limits."
            },
            {
                "id": "q24",
                "text": "Which of the following system actions in Account Engagement will cause a prospect record to queue for syncing to Salesforce? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Add to Salesforce campaign via automation rule"
                    },
                    {
                        "id": "B",
                        "text": "Visitor sessions"
                    },
                    {
                        "id": "C",
                        "text": "Record changes that occur because of an automation rule"
                    },
                    {
                        "id": "D",
                        "text": "Prospect account changes"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "To test the connector without waiting 10-15 minutes for the automated sync, an administrator can click the \"Sync with CRM\" button directly on the prospect record."
            },
            {
                "id": "q25",
                "text": "A user is importing a list of prospects into Account Engagement. They have a custom Text field for \"Department\". Based on the documentation, what is the character limit for a custom Text field?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "100 characters"
                    },
                    {
                        "id": "B",
                        "text": "255 characters"
                    },
                    {
                        "id": "C",
                        "text": "65,535 characters"
                    },
                    {
                        "id": "D",
                        "text": "There is no character limit. 26. A Marketing Administrator at Cloudy Computing is configuring the Salesforce-Account Engagement connector for the first time. They have just mapped all the custom lead fields to contact fields in Salesforce. What is the next immediate step the administrator should take to ensure Account Engagement information is visible to Salesforce users?"
                    },
                    {
                        "id": "A",
                        "text": "Install the Account Engagement AppExchange Application"
                    },
                    {
                        "id": "B",
                        "text": "Add Custom Account Engagement Buttons to Salesforce Page Layouts"
                    },
                    {
                        "id": "C",
                        "text": "Show Account Engagement Information on Lead and Contact Page Layouts"
                    },
                    {
                        "id": "D",
                        "text": "Give Users Access to Account Engagement Data in Salesforce"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q26",
                "text": "After installing the Account Engagement AppExchange application, an administrator wants to give a sales manager access to view Account Engagement data within Salesforce. Which action should the admin take?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Assign the Sales Cloud User permission set to the user."
                    },
                    {
                        "id": "B",
                        "text": "Apply the Account Engagement permission set included with the AppExchange package to the user."
                    },
                    {
                        "id": "C",
                        "text": "Give the user the Marketing user role in Account Engagement."
                    },
                    {
                        "id": "D",
                        "text": "Assign the connector user permission set."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q27",
                "text": "A new Account Engagement business unit is provisioned with the v2 Salesforce Connector. What is the default state of this connector upon creation, and what must be done before records can sync?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It is created in a paused state and must be unpaused by an Account Engagement admin."
                    },
                    {
                        "id": "B",
                        "text": "It is created in an active state but requires Marketing Data Sharing to be configured first."
                    },
                    {
                        "id": "C",
                        "text": "It is paused and automatically unpauses when the first prospect is created."
                    },
                    {
                        "id": "D",
                        "text": "It is active and begins syncing immediately after installation."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q28",
                "text": "Cloudy Computing has a large Salesforce database but only wants to sync leads and contacts from the North American region to their Account Engagement business unit. They are using the v2 Salesforce connector. What is the recommended feature to control which records are shared between systems?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Automation Rules"
                    },
                    {
                        "id": "B",
                        "text": "Marketing Data Sharing"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic Lists"
                    },
                    {
                        "id": "D",
                        "text": "Role-based email addresses"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q29",
                "text": "A company has recently integrated Salesforce and Account Engagement. They have thousands of existing leads and contacts in Salesforce. What action must the administrator take to ensure these existing records are created as prospects in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Click the \"Sync with CRM\" button on each record."
                    },
                    {
                        "id": "B",
                        "text": "Import the existing Salesforce leads and contacts into Account Engagement via a CSV file."
                    },
                    {
                        "id": "C",
                        "text": "Wait 24 hours for the automatic initial data sync to complete."
                    },
                    {
                        "id": "D",
                        "text": "Update the connector user permission set to automatically pull historical data."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q30",
                "text": "Cloudy Consulting wants to streamline user management by implementing Salesforce User Sync for Account Engagement. Which of the following statements are true regarding Salesforce User Sync? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "It maps Salesforce profiles to Account Engagement user roles."
                    },
                    {
                        "id": "B",
                        "text": "It manages most synced user fields from Salesforce."
                    },
                    {
                        "id": "C",
                        "text": "It eliminates the need to update user records in both systems."
                    },
                    {
                        "id": "D",
                        "text": "It requires users to maintain a separate Account Engagement password."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q31",
                "text": "A Salesforce user wants to manually push a specific Salesforce contact to Account Engagement to begin tracking their activity, even though a corresponding prospect record does not yet exist. Which button should the administrator add to the contact page layout to enable this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Add to Account Engagement List"
                    },
                    {
                        "id": "B",
                        "text": "Sync with CRM"
                    },
                    {
                        "id": "C",
                        "text": "Send to Account Engagement"
                    },
                    {
                        "id": "D",
                        "text": "Send Account Engagement Email"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q32",
                "text": "A prospect is created in Account Engagement via a form submission. The prospect does not have a CRM ID, but there are multiple records in Salesforce that share the prospect's email address. How does Account Engagement handle the sync?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It syncs with the most recently updated Salesforce record."
                    },
                    {
                        "id": "B",
                        "text": "It creates a new lead in Salesforce with the same email address."
                    },
                    {
                        "id": "C",
                        "text": "It syncs with the first record it finds in Salesforce with that email address."
                    },
                    {
                        "id": "D",
                        "text": "It halts the sync and flags a duplication error for an administrator to resolve."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q33",
                "text": "Cloudy Consulting wants to import a list of prospects that includes role-based email addresses (e.g., info@, sales@). According to Account Engagement defaults, what will happen when they attempt to import these addresses?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The role-based email addresses will be imported and flagged for review."
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement restricts importing and sending to role-based email addresses by default to protect sending reputation."
                    },
                    {
                        "id": "C",
                        "text": "The addresses will be imported, but emails sent to them will be automatically delayed by 24 hours."
                    },
                    {
                        "id": "D",
                        "text": "The addresses will bypass all spam filters and be imported as standard prospects."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q34",
                "text": "An administrator permanently deletes a prospect from the Account Engagement recycle bin. What is true regarding the impact on the data and the corresponding Salesforce record? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect's engagement data is removed and impacts reporting."
                    },
                    {
                        "id": "B",
                        "text": "The prospect is hidden but its engagement data is retained in reports."
                    },
                    {
                        "id": "C",
                        "text": "The associated leads and contacts in Salesforce are automatically deleted."
                    },
                    {
                        "id": "D",
                        "text": "Associated leads and contacts must be deleted from Salesforce before permanently deleting the prospect in Account Engagement."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q35",
                "text": "When configuring the connector user for the Salesforce-Account Engagement integration, an admin is reviewing object permissions. What level of field permissions must the connector user have for standard objects like Accounts, Contacts, and Leads?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Read-only access to all fields."
                    },
                    {
                        "id": "B",
                        "text": "All standard and custom fields syncing with Account Engagement."
                    },
                    {
                        "id": "C",
                        "text": "Modify All Data permissions across the entire Salesforce org."
                    },
                    {
                        "id": "D",
                        "text": "View access to only the email address and CRM ID fields."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q36",
                "text": "An administrator is setting up a new teammate in Account Engagement and is reviewing the default user roles to assign the appropriate access level. Which of the following is NOT one of the four default user roles provided by Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Marketing User"
                    },
                    {
                        "id": "B",
                        "text": "Sales Manager"
                    },
                    {
                        "id": "C",
                        "text": "Content Creator"
                    },
                    {
                        "id": "D",
                        "text": "Administrator"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q37",
                "text": "An administrator is mapping a custom Salesforce field to a custom Account Engagement field. They want to ensure that whenever the field's picklist values are updated in Salesforce, the corresponding field in Account Engagement updates automatically to match. Which setting should they enable during field mapping?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Sync behavior: Use Account Engagement's value"
                    },
                    {
                        "id": "B",
                        "text": "Keep this field\u2019s type and possible values in sync with the CRM"
                    },
                    {
                        "id": "C",
                        "text": "Automatically map Salesforce custom fields"
                    },
                    {
                        "id": "D",
                        "text": "Enable Marketing Data Sharing for this field"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q38",
                "text": "A marketing manager at Cloudy Consulting is reviewing a list of prospects to send to the sales team. They want to prioritize prospects who have shown high interest by interacting frequently with the company's marketing materials. Which Account Engagement metric should the manager use to evaluate this specific behavior?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Prospect Grade"
                    },
                    {
                        "id": "B",
                        "text": "Prospect Score"
                    },
                    {
                        "id": "C",
                        "text": "Campaign ROI"
                    },
                    {
                        "id": "D",
                        "text": "Conversion Rate"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q39",
                "text": "The sales team wants to focus their outreach on prospects who fit the profile of their ideal customer, regardless of how many emails the prospect has opened. Which metric in Account Engagement represents how closely a prospect fits this ideal profile?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Prospect Score"
                    },
                    {
                        "id": "B",
                        "text": "Conversion"
                    },
                    {
                        "id": "C",
                        "text": "Prospect Grade"
                    },
                    {
                        "id": "D",
                        "text": "Lead Qualification"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q40",
                "text": "A Salesforce admin is installing the Account Engagement AppExchange application. During the install wizard, which security option should they select for the installation?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Install for All Users"
                    },
                    {
                        "id": "B",
                        "text": "Grant access to admins only"
                    },
                    {
                        "id": "C",
                        "text": "Install for Specific Profiles"
                    },
                    {
                        "id": "D",
                        "text": "Grant access to Sales Cloud users only"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q41",
                "text": "A prospect was accidentally deleted and moved to the Account Engagement recycle bin. Under which circumstance will the deleted prospect be automatically restored from the recycle bin?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "When the prospect visits the company website anonymously."
                    },
                    {
                        "id": "B",
                        "text": "When an administrator exports the recycle bin to a CSV."
                    },
                    {
                        "id": "C",
                        "text": "When the Salesforce record it is syncing with is undeleted."
                    },
                    {
                        "id": "D",
                        "text": "When the connector is unpaused."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q42",
                "text": "A marketing user wants to understand the first marketing-related contact a prospect had with the company. Which feature in Account Engagement is assigned to every prospect to track this initial touchpoint?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Lead Nurturing"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rules"
                    },
                    {
                        "id": "C",
                        "text": "Marketing Data Sharing"
                    },
                    {
                        "id": "D",
                        "text": "Campaign"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q43",
                "text": "A prospect is syncing with a Salesforce contact. The contact is added to a newly created opportunity in Salesforce. According to default scoring rules in Account Engagement, how will this affect the prospect's score?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The score will remain unchanged until the opportunity is won."
                    },
                    {
                        "id": "B",
                        "text": "The score will increase by 50 points for the created opportunity."
                    },
                    {
                        "id": "C",
                        "text": "The score will decrease by 100 points."
                    },
                    {
                        "id": "D",
                        "text": "The score will be reset to zero."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q44",
                "text": "A company decides not to use Salesforce User Sync for their Account Engagement users. In this scenario, what is required for users to access Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A dedicated Account Engagement password"
                    },
                    {
                        "id": "B",
                        "text": "A third-party identity provider integration"
                    },
                    {
                        "id": "C",
                        "text": "Salesforce single sign-on"
                    },
                    {
                        "id": "D",
                        "text": "The Account Engagement AppExchange package"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q45",
                "text": "An administrator is creating a custom prospect field in Account Engagement to record RSVPs for an upcoming event. They want users to select either \"Yes, I'll be there!\" or \"No, I can't come.\" To limit responses to only these two options, which field type should the administrator select?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Text"
                    },
                    {
                        "id": "B",
                        "text": "Checkbox"
                    },
                    {
                        "id": "C",
                        "text": "Radio Button"
                    },
                    {
                        "id": "D",
                        "text": "Dropdown"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q46",
                "text": "A marketing user notices that data between Account Engagement and Salesforce isn't updating instantaneously. They ask the administrator how often the two systems sync. What is the fastest frequency at which syncs can occur?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Every 10 seconds"
                    },
                    {
                        "id": "B",
                        "text": "Every 2 minutes"
                    },
                    {
                        "id": "C",
                        "text": "Every 10 minutes"
                    },
                    {
                        "id": "D",
                        "text": "Every hour"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q47",
                "text": "A sales rep is looking at a contact record in Salesforce and wants to see the emails sent to that prospect from Account Engagement. Where do list emails and one-to-one emails get recorded in the CRM record?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "In the Prospect Activities iframe only"
                    },
                    {
                        "id": "B",
                        "text": "In the activity section of a CRM record"
                    },
                    {
                        "id": "C",
                        "text": "In the Custom Account Engagement Object"
                    },
                    {
                        "id": "D",
                        "text": "In the Marketing Data Sharing related list"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q48",
                "text": "An administrator is doing a system cleanup and deleting several old landing pages and forms, sending them to the Account Engagement recycle bin. What effect do items in the recycle bin have on the account's usage limits?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They count towards 50% of the normal usage limit."
                    },
                    {
                        "id": "B",
                        "text": "They continue to count fully towards usage limits until permanently deleted."
                    },
                    {
                        "id": "C",
                        "text": "They do not count toward usage limits."
                    },
                    {
                        "id": "D",
                        "text": "They temporarily freeze usage limits for 24 hours."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q49",
                "text": "An administrator has just set up the Salesforce-Account Engagement connector and wants to test it. They create a prospect record in Account Engagement that matches a lead in their CRM. What should they do next to confirm the sync works without waiting 10-15 minutes?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Click \"Sync with CRM\" on the prospect record."
                    },
                    {
                        "id": "B",
                        "text": "Click \"Send to Account Engagement\" on the lead record."
                    },
                    {
                        "id": "C",
                        "text": "Unpause the connector a second time."
                    },
                    {
                        "id": "D",
                        "text": "Permanently delete the prospect and let it recreate."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            }
        ]
    },
    {
        "id": "exam_3",
        "title": "3-PardotForms FormHandlers LandingPages",
        "questions": [
            {
                "id": "q1",
                "text": "You want to completely control the look and feel of your forms, and post form submission data to more than one database. Which Account Engagement tool should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement Forms"
                    },
                    {
                        "id": "B",
                        "text": "Enhanced Landing Pages"
                    },
                    {
                        "id": "C",
                        "text": "Form Handlers"
                    },
                    {
                        "id": "D",
                        "text": "Layout Templates"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Form Handlers Form handlers allow you to completely control the look and feel of your forms using your own web infrastructure, while also letting you post form submission data to more than one database."
            },
            {
                "id": "q2",
                "text": "Which two features are available for hosted Account Engagement forms but NOT for form handlers? (Select 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Progressive profiling"
                    },
                    {
                        "id": "B",
                        "text": "Form views and error data"
                    },
                    {
                        "id": "C",
                        "text": "Sends autoresponder emails"
                    },
                    {
                        "id": "D",
                        "text": "Base automation rules on form completions"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B"
                ],
                "explanation": "Progressive profiling, Form views and error data Hosted Account Engagement forms support progressive profiling and provide form views and error data. Form handlers do not natively provide these because they rely on external forms."
            },
            {
                "id": "q3",
                "text": "A marketer needs to maintain their current lead flow but also integrate with Account Engagement to track submissions. What is the recommended solution?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement Forms"
                    },
                    {
                        "id": "B",
                        "text": "Form Handlers"
                    },
                    {
                        "id": "C",
                        "text": "Third-party API integration"
                    },
                    {
                        "id": "D",
                        "text": "Custom Layout Template"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Form Handlers Form handlers are designed to integrate with existing external forms, allowing you to maintain your current lead flow while capturing the data in Account Engagement."
            },
            {
                "id": "q4",
                "text": "Which feature provides field-level change audits for prospects?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Hosted Forms only"
                    },
                    {
                        "id": "B",
                        "text": "Form Handlers only"
                    },
                    {
                        "id": "C",
                        "text": "Both Hosted Forms and Form Handlers"
                    },
                    {
                        "id": "D",
                        "text": "Neither"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Both Hosted Forms and Form Handlers Both forms and form handlers provide field-level change audits for prospects."
            },
            {
                "id": "q5",
                "text": "A company wants to use a single form for a tradeshow booth where multiple people will submit their information on the same device. How can you ensure each submission creates or updates a distinct prospect without tracking cookies overwriting them?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use a Form Handler with Server-Side Post enabled."
                    },
                    {
                        "id": "B",
                        "text": "Enable Kiosk / Data Entry Mode on the form."
                    },
                    {
                        "id": "C",
                        "text": "Disable Activity Throttling."
                    },
                    {
                        "id": "D",
                        "text": "Use a Conditional CAPTCHA."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Enable Kiosk / Data Entry Mode on the form. Kiosk Mode disables visitor tracking cookies for the form, allowing multiple prospects to submit the form from the same device without their tracking histories merging."
            },
            {
                "id": "q6",
                "text": "What is the primary purpose of Progressive Profiling in Account Engagement forms?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To increase form conversion rates by gathering prospect information over time across multiple form submissions."
                    },
                    {
                        "id": "B",
                        "text": "To dynamically redirect prospects to different landing pages based on their field inputs."
                    },
                    {
                        "id": "C",
                        "text": "To prevent data duplication in the CRM."
                    },
                    {
                        "id": "D",
                        "text": "To validate email addresses using third-party services."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "To increase form conversion rates by gathering prospect information over time across multiple form submissions. Progressive profiling keeps forms short by only asking for fields that the prospect hasn't already completed in previous interactions, improving conversion rates."
            },
            {
                "id": "q7",
                "text": "A form has a dependent field. Which statement is true about dependent fields?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dependent fields are available in both forms and form handlers."
                    },
                    {
                        "id": "B",
                        "text": "A dependent field can only be based on a checkbox field."
                    },
                    {
                        "id": "C",
                        "text": "A dependent field appears based on a value entered in another text or dropdown field."
                    },
                    {
                        "id": "D",
                        "text": "Dependent fields can only be created using custom JavaScript."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "A dependent field appears based on a value entered in another text or dropdown field. Dependent fields display dynamically based on the value selected in another field (like showing \"State\" when \"Country\" is \"USA\"). They are not available on form handlers."
            },
            {
                "id": "q8",
                "text": "By default, what is the character limit measurement unit for standard prospect fields?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Words"
                    },
                    {
                        "id": "B",
                        "text": "Characters"
                    },
                    {
                        "id": "C",
                        "text": "Bytes"
                    },
                    {
                        "id": "D",
                        "text": "Pixels"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Bytes Default prospect fields use character limits measured in bytes. This is important for complex pictographs which use more bytes per character than simple letters."
            },
            {
                "id": "q9",
                "text": "An admin wants to change a default field's type from a radio button to a checkbox for all new forms. Where can this be configured?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Global Field Settings"
                    },
                    {
                        "id": "B",
                        "text": "Layout Templates"
                    },
                    {
                        "id": "C",
                        "text": "Form Handler Settings"
                    },
                    {
                        "id": "D",
                        "text": "Landing Page Builder"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Global Field Settings An admin can edit a field's default settings, such as changing it from a radio button to a checkbox for all new forms, in the Global Field Settings."
            },
            {
                "id": "q10",
                "text": "A user needs to configure a form such that the \"State\" field only appears if the \"Country\" field is selected as \"USA\". Which feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "B",
                        "text": "Dependent Form Fields"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "D",
                        "text": "Conditional CAPTCHA"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Dependent Form Fields Dependent fields allow you to hide or show fields based on the input of a previous field, such as country and state selections."
            },
            {
                "id": "q11",
                "text": "Which bot protection method is built-in and invisible to human prospects on all hosted Account Engagement forms?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "reCAPTCHA"
                    },
                    {
                        "id": "B",
                        "text": "Conditional CAPTCHA"
                    },
                    {
                        "id": "C",
                        "text": "Honeypot Technique"
                    },
                    {
                        "id": "D",
                        "text": "Double Opt-in"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Honeypot Technique A honeypot is an invisible field that human prospects can't see but bots fill out. If the field is completed, the form submission is rejected."
            },
            {
                "id": "q12",
                "text": "How does the Conditional CAPTCHA feature work on Account Engagement marketing forms?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It displays a CAPTCHA to all users on their first visit."
                    },
                    {
                        "id": "B",
                        "text": "It pings a database of known spam IP addresses and displays a CAPTCHA only to visitors from those IPs."
                    },
                    {
                        "id": "C",
                        "text": "It requires users to enter a code sent to their email."
                    },
                    {
                        "id": "D",
                        "text": "It hides the submit button until a user clicks a checkbox."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "It pings a database of known spam IP addresses and displays a CAPTCHA only to visitors from those IPs. Conditional CAPTCHA reduces friction for normal users by only displaying the CAPTCHA if the visitor comes from a suspected spam IP."
            },
            {
                "id": "q13",
                "text": "A customer is experiencing an unusually high number of form submissions in a short timeframe. What happens by default?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The form is temporarily disabled."
                    },
                    {
                        "id": "B",
                        "text": "A reCAPTCHA appears automatically for all visitors."
                    },
                    {
                        "id": "C",
                        "text": "Submissions are rejected and sent to a spam queue."
                    },
                    {
                        "id": "D",
                        "text": "The Honeypot field becomes visible."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "A reCAPTCHA appears automatically for all visitors. When Account Engagement detects an unusual number of form submissions within a certain time frame, reCAPTCHA appears by default to protect against bots."
            },
            {
                "id": "q14",
                "text": "If a marketer wants to add a honeypot field to an external form integrated with a form handler, what must they do?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement automatically appends it to the form handler snippet."
                    },
                    {
                        "id": "B",
                        "text": "Add a hidden input field named \"pardot_extra_field\" to their external form's HTML."
                    },
                    {
                        "id": "C",
                        "text": "Enable \"Honeypot\" in the Form Handler settings."
                    },
                    {
                        "id": "D",
                        "text": "They cannot use honeypots with form handlers."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Add a hidden input field named \"pardot_extra_field\" to their external form's HTML. For form handlers, you can manually add the honeypot protection by adding the hidden <input type=\"text\" id=\"pardot_extra_field\" name=\"pardot_extra_field\"> within a hidden div on the external form."
            },
            {
                "id": "q15",
                "text": "When placing an Account Engagement form on an external web page using an iframe, how do you obtain the iframe code?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "From the Layout Template's source code."
                    },
                    {
                        "id": "B",
                        "text": "By clicking the arrow next to the form and selecting \"View HTML code\" from the dropdown."
                    },
                    {
                        "id": "C",
                        "text": "By copying the form's vanity URL and wrapping it in an <iframe> tag manually."
                    },
                    {
                        "id": "D",
                        "text": "From the Form Handler summary page."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "By clicking the arrow next to the form and selecting \"View HTML code\" from the dropdown. This option provides the exact iframe code needed to embed the hosted form on your website."
            },
            {
                "id": "q16",
                "text": "In a form's layout template, what variable tag is used to indicate where the form content (fields, labels, etc.) should be inserted?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "%%form-content%%"
                    },
                    {
                        "id": "B",
                        "text": "%%content%%"
                    },
                    {
                        "id": "C",
                        "text": "%%form-fields%%"
                    },
                    {
                        "id": "D",
                        "text": "%%form-opening-general-content%%"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "%%content%% The contents of the form tab are inserted into the %%content%% variable tag of your layout template."
            },
            {
                "id": "q17",
                "text": "To completely customize the look and feel of a hosted form's fields, an admin edits the layout template. Which tag runs the code for each field on the form in a loop?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "%%form-loop-fields%%"
                    },
                    {
                        "id": "B",
                        "text": "%%form-start-loop-fields%% and %%form-end-loop-fields%%"
                    },
                    {
                        "id": "C",
                        "text": "%%form-fields-all%%"
                    },
                    {
                        "id": "D",
                        "text": "%%loop-start%% and %%loop-end%%"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "%%form-start-loop-fields%% and %%form-end-loop-fields%% These tags run all the HTML/CSS code between them for each field present on the form."
            },
            {
                "id": "q18",
                "text": "You want to add custom CSS to target a specific field on your hosted form. How can you achieve this using the form builder?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Add the CSS class in the field's Advanced tab."
                    },
                    {
                        "id": "B",
                        "text": "Add the CSS class directly in the Form Handler settings."
                    },
                    {
                        "id": "C",
                        "text": "Write inline CSS in the field's description."
                    },
                    {
                        "id": "D",
                        "text": "You cannot add custom CSS to individual fields, only to the layout template."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Add the CSS class in the field's Advanced tab. You can add CSS classes to individual fields from the Advanced tab in the form field configuration. You separate multiple classes with a space."
            },
            {
                "id": "q19",
                "text": "Which CSS selector would you use to target required fields in an Account Engagement form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": ".required"
                    },
                    {
                        "id": "B",
                        "text": "#pardot-form .required"
                    },
                    {
                        "id": "C",
                        "text": ".pardot-required"
                    },
                    {
                        "id": "D",
                        "text": "#required-field"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "required The .required class targets required fields. You can use it to make the font bold or add an asterisk image."
            },
            {
                "id": "q20",
                "text": "When testing a form, you notice that Account Engagement is only recording one submission every 30 minutes in the prospect's activities. Why is this happening?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The form has bot protection enabled."
                    },
                    {
                        "id": "B",
                        "text": "Form submissions are throttled by default, so only one submission appears in prospect activities every 30 minutes."
                    },
                    {
                        "id": "C",
                        "text": "You did not clear your browser cookies before submitting."
                    },
                    {
                        "id": "D",
                        "text": "The form handler is using a server-side post."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Form submissions are throttled by default, so only one submission appears in prospect activities every 30 minutes. Account Engagement throttles activities to prevent rapid duplicate submissions. Every submission fires completion actions, but only one is recorded in activities per 30-minute window unless Kiosk mode is used."
            },
            {
                "id": "q21",
                "text": "You are testing progressive profiling on a form. How long must you wait after submitting the form before the progressive fields will display for the next submission without modifying the URL?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "10 minutes"
                    },
                    {
                        "id": "B",
                        "text": "30 minutes"
                    },
                    {
                        "id": "C",
                        "text": "1 hour"
                    },
                    {
                        "id": "D",
                        "text": "24 hours"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "10 minutes When testing progressive profiling, you must wait 10 minutes after submitting the form for the next set of fields to display, unless you use a specific URL parameter."
            },
            {
                "id": "q22",
                "text": "To force a form with progressive profiling to display during the 10-minute throttling period while testing, what parameter should be added to the end of the form's URL?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "?progressive=true"
                    },
                    {
                        "id": "B",
                        "text": "?PI_ALWAYS_DISPLAY=1"
                    },
                    {
                        "id": "C",
                        "text": "?disable_throttling=1"
                    },
                    {
                        "id": "D",
                        "text": "?test_mode=true"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "?PI_ALWAYS_DISPLAY=1 Adding this parameter to the end of your form's URL bypasses the 10-minute throttling, forcing the form to display immediately for testing."
            },
            {
                "id": "q23",
                "text": "If a cookied prospect submits a form handler with a changed email address, what is the expected behavior?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The existing prospect record is updated with the new email address."
                    },
                    {
                        "id": "B",
                        "text": "An additional prospect record is created."
                    },
                    {
                        "id": "C",
                        "text": "The submission is rejected."
                    },
                    {
                        "id": "D",
                        "text": "The activity is recorded on the existing prospect, but the email address is not updated."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "An additional prospect record is created. If a cookied prospect submits a form handler with a new email address, a new prospect record is created."
            },
            {
                "id": "q24",
                "text": "You are using a server-side post to submit data to a form handler. What setting must be enabled on the form handler to prevent tracking your server as the prospect?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Disable Visitor Activity Throttling"
                    },
                    {
                        "id": "B",
                        "text": "Enable Data Forwarding"
                    },
                    {
                        "id": "C",
                        "text": "Kiosk/Data Entry Mode"
                    },
                    {
                        "id": "D",
                        "text": "Server-Side Tracking Mode"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Kiosk/Data Entry Mode When doing server-side posts to a form handler, Kiosk/Data Entry mode prevents tracking the server's IP/cookie as the prospect."
            },
            {
                "id": "q25",
                "text": "What happens if a field is required on your form handler, but a prospect leaves the field blank on your external form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The submission is successful, but the field is left blank in Account Engagement."
                    },
                    {
                        "id": "B",
                        "text": "The form submission fails, and the prospect is redirected to the error location."
                    },
                    {
                        "id": "C",
                        "text": "The prospect is redirected to the success location with a warning message."
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement automatically fills the field with a default value."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The form submission fails, and the prospect is redirected to the error location. Account Engagement rejects the submission if a required field is missing and redirects the user to the configured error URL."
            },
            {
                "id": "q26",
                "text": "Form handlers can accept specific URL parameters on POST to temporarily override the form handler\u2019s stored success or error locations for that request. What are these parameters?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "redirect_url and error_url"
                    },
                    {
                        "id": "B",
                        "text": "success_location and error_location"
                    },
                    {
                        "id": "C",
                        "text": "return_url and fail_url"
                    },
                    {
                        "id": "D",
                        "text": "next_page and error_page"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "success_location and error_location Form handlers accept these parameters on POST to temporarily override the settings for that specific request. They must be valid URLs matching the tracker domain or go.pardot.com."
            },
            {
                "id": "q27",
                "text": "When using a form handler, which two enctypes are supported? (Select 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "multipart/form-data"
                    },
                    {
                        "id": "B",
                        "text": "application/x-www-form-urlencoded"
                    },
                    {
                        "id": "C",
                        "text": "text/plain"
                    },
                    {
                        "id": "D",
                        "text": "Empty enctype attribute"
                    }
                ],
                "correctAnswers": [
                    "B",
                    "D"
                ],
                "explanation": "application/x-www-form-urlencoded, Empty enctype attribute Form handlers do not accept multipart/form-data. They integrate with forms using an empty enctype attribute or application/x-www-form-urlencoded."
            },
            {
                "id": "q28",
                "text": "An admin needs to integrate an existing Salesforce Web-to-Lead form with Account Engagement using a Form Handler to capture submissions in both systems simultaneously. Which setting must be enabled on the Form Handler?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Server-Side Post"
                    },
                    {
                        "id": "B",
                        "text": "Enable data forwarding to the success location"
                    },
                    {
                        "id": "C",
                        "text": "Disable Visitor Activity throttling"
                    },
                    {
                        "id": "D",
                        "text": "Kiosk/Data Entry Mode"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Enable data forwarding to the success location This setting transfers the data post received by the Form Handler directly to the success location (which would be the Salesforce Web-to-Lead endpoint)."
            },
            {
                "id": "q29",
                "text": "To forward data from an Account Engagement Form Handler to a Salesforce Web-to-Lead form in production, what must the success location be set to?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A specific Salesforce URL starting with https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                    },
                    {
                        "id": "B",
                        "text": "The Referring URL"
                    },
                    {
                        "id": "C",
                        "text": "The vanity URL of the form handler"
                    },
                    {
                        "id": "D",
                        "text": "An Account Engagement Landing Page URL"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "A specific Salesforce URL starting with https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8 When forwarding to a production Salesforce Web-to-Lead, this specific URL format must be used in the Specific URL success location."
            },
            {
                "id": "q30",
                "text": "A company has strict security policies that strip referrer IDs from submitted form handlers. What must be added to the web page containing the form handler to ensure redirects work?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A JavaScript redirect script"
                    },
                    {
                        "id": "B",
                        "text": "A <meta name=\"referrer\" content=\"no-referrer-when-downgrade\" /> tag in the <head>"
                    },
                    {
                        "id": "C",
                        "text": "An SSL certificate on the tracker domain"
                    },
                    {
                        "id": "D",
                        "text": "A server-side redirect rule"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "A <meta name=\"referrer\" content=\"no-referrer-when-downgrade\" /> tag in the <head> Stringent security policies can strip referrer IDs. This meta tag ensures redirects work as expected when submitting form handlers."
            },
            {
                "id": "q31",
                "text": "What is the recommended method to ensure a prospect provides a valid email address before granting them access to gated content via a form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Redirect the prospect directly to the content URL upon form completion."
                    },
                    {
                        "id": "B",
                        "text": "Use a conditional CAPTCHA."
                    },
                    {
                        "id": "C",
                        "text": "Use an autoresponder email with a link to the content."
                    },
                    {
                        "id": "D",
                        "text": "Enable progressive profiling."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Use an autoresponder email with a link to the content. This \"confirmed opt-in\" approach ensures the prospect must provide a valid inbox to access the content, rather than using a fake email."
            },
            {
                "id": "q32",
                "text": "If you want to bypass the Thank You Content and immediately redirect a prospect to a whitepaper PDF upon form submission, which setting should you enable?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Forwarding to success location"
                    },
                    {
                        "id": "B",
                        "text": "Redirect the prospect instead of showing the form's Thank You Content"
                    },
                    {
                        "id": "C",
                        "text": "Kiosk Mode"
                    },
                    {
                        "id": "D",
                        "text": "Disable visitor activity throttling"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Redirect the prospect instead of showing the form's Thank You Content This option allows you to bypass the standard Thank You Content and immediately redirect the user to a PDF, whitepaper, or other URL upon submission."
            },
            {
                "id": "q33",
                "text": "Which two features are exclusive to the Enhanced Landing Page Experience? (Select 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "HTML and WYSIWYG editors"
                    },
                    {
                        "id": "B",
                        "text": "Drag-and-drop builder"
                    },
                    {
                        "id": "C",
                        "text": "Salesforce CMS image integration"
                    },
                    {
                        "id": "D",
                        "text": "Layout templates with content regions"
                    }
                ],
                "correctAnswers": [
                    "B",
                    "C"
                ],
                "explanation": "Drag-and-drop builder, Salesforce CMS image integration The Enhanced Landing Page Experience features a drag-and-drop interface and native integration with Salesforce CMS. Classic uses HTML/WYSIWYG editors."
            },
            {
                "id": "q34",
                "text": "To use the Enhanced Landing Page Experience, which permissions and setup are required?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create Account Engagement Content permission set and access to Digital Experiences app."
                    },
                    {
                        "id": "B",
                        "text": "Custom HTML coding skills and a third-party CMS."
                    },
                    {
                        "id": "C",
                        "text": "Classic Landing Page Builder permission."
                    },
                    {
                        "id": "D",
                        "text": "Form Handler Administration role."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Create Account Engagement Content permission set and access to Digital Experiences app. To use the enhanced builders, users need the Create Account Engagement Content permission set and a Salesforce CMS channel configured via Digital Experiences."
            },
            {
                "id": "q35",
                "text": "When creating an enhanced landing page, what must the landing page be associated with?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A classic layout template"
                    },
                    {
                        "id": "B",
                        "text": "A connected campaign"
                    },
                    {
                        "id": "C",
                        "text": "A form handler"
                    },
                    {
                        "id": "D",
                        "text": "An email preference center"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "A connected campaign Enhanced landing pages must be associated with a connected campaign, which in turn must be associated with a business unit."
            },
            {
                "id": "q36",
                "text": "In the enhanced landing page builder, what is the maximum size allowed for an HTML field component?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "128 KB"
                    },
                    {
                        "id": "B",
                        "text": "384 KB"
                    },
                    {
                        "id": "C",
                        "text": "1 MB"
                    },
                    {
                        "id": "D",
                        "text": "5 MB"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "384 KB When designing landing page content in the enhanced builder, the HTML field must not exceed 384 KB."
            },
            {
                "id": "q37",
                "text": "A user wants to add an interactive SVG file to an enhanced landing page. Why are they unable to do so?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "SVGs require a special Layout Template."
                    },
                    {
                        "id": "B",
                        "text": "Active content, such as JavaScript or SVG files, isn't supported in enhanced landing pages."
                    },
                    {
                        "id": "C",
                        "text": "They must use Salesforce Files instead of Salesforce CMS."
                    },
                    {
                        "id": "D",
                        "text": "The file exceeds 384 KB."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Active content, such as JavaScript or SVG files, isn't supported in enhanced landing pages. The enhanced landing page builder strictly prohibits active content like JavaScript and SVG files in its components for security and rendering stability."
            },
            {
                "id": "q38",
                "text": "When creating a Layout Template for a Classic Landing Page, which three variable tags MUST be included so that content can populate correctly?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "%%name%%, %%content%%, %%footer%%"
                    },
                    {
                        "id": "B",
                        "text": "%%title%%, %%content%%, %%description%%"
                    },
                    {
                        "id": "C",
                        "text": "%%header%%, %%form%%, %%footer%%"
                    },
                    {
                        "id": "D",
                        "text": "%%title%%, %%form%%, %%description%%"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "%%title%%, %%content%%, %%description%% These three variable tags must be present in a classic layout template to correctly populate the landing page's title, meta description, and body content."
            },
            {
                "id": "q39",
                "text": "To lock down areas of a classic layout template while allowing users to edit specific sections, what attribute must be added to the HTML elements?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "class=\"editable\""
                    },
                    {
                        "id": "B",
                        "text": "pardot-region"
                    },
                    {
                        "id": "C",
                        "text": "data-editable=\"true\""
                    },
                    {
                        "id": "D",
                        "text": "id=\"pardot-content\""
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "pardot-region Adding the pardot-region attribute (e.g., pardot-region=\"header\") makes that specific element editable in the classic landing page WYSIWYG editor."
            },
            {
                "id": "q40",
                "text": "An admin wants to restrict an editable content region in a classic landing page to only allow the \"Simple\" editor. How can this be accomplished?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "By adding pardot-region-type=\"simple\" to the element."
                    },
                    {
                        "id": "B",
                        "text": "By wrapping the element in a <simple> tag."
                    },
                    {
                        "id": "C",
                        "text": "By configuring the region in the Page Options menu."
                    },
                    {
                        "id": "D",
                        "text": "It is not possible; all regions use the WYSIWYG editor."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "By adding pardot-region-type=\"simple\" to the element. This attribute restricts the editing capabilities of that specific region to the basic \"Simple\" editor instead of the full WYSIWYG editor."
            },
            {
                "id": "q41",
                "text": "When embedding an iframe using the HTML component in the enhanced landing page builder, when is the iframed content actually rendered?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Immediately on the builder canvas."
                    },
                    {
                        "id": "B",
                        "text": "Only on the published landing page."
                    },
                    {
                        "id": "C",
                        "text": "In the page preview mode only."
                    },
                    {
                        "id": "D",
                        "text": "After the user clicks a placeholder image."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Only on the published landing page. A placeholder for the iframe content appears on the builder canvas and record home. The actual iframed content is rendered only when the landing page is published."
            },
            {
                "id": "q42",
                "text": "How do you apply custom styles to an Account Engagement form placed on an Enhanced Landing Page?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "You cannot apply styles to forms in enhanced landing pages."
                    },
                    {
                        "id": "B",
                        "text": "Modify the layout template associated with the enhanced landing page."
                    },
                    {
                        "id": "C",
                        "text": "Adjust the colors, fonts, and other styles using the editing panel of the enhanced landing page builder."
                    },
                    {
                        "id": "D",
                        "text": "Use a Form Handler instead."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Adjust the colors, fonts, and other styles using the editing panel of the enhanced landing page builder. You can customize styles like background, labels, and buttons directly on the form component in the enhanced builder, which overrides the original form's layout template for that page only."
            },
            {
                "id": "q43",
                "text": "If styles applied to a form component in the enhanced landing page builder do not seem to take effect, what is the most likely cause?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The form has Kiosk mode enabled."
                    },
                    {
                        "id": "B",
                        "text": "The landing page has not been published."
                    },
                    {
                        "id": "C",
                        "text": "Existing styles in the form record\u2019s Look and Feel section or Above Form source code are overriding the builder changes."
                    },
                    {
                        "id": "D",
                        "text": "You must clear your browser cache."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Existing styles in the form record\u2019s Look and Feel section or Above Form source code are overriding the builder changes. If form component styles don't apply, check the original form record. Styles in the \"Look and Feel\" section or \"Above Form\" source code will take precedence over builder styles."
            },
            {
                "id": "q44",
                "text": "You want to reuse a vanity URL from an old enhanced landing page on a new enhanced landing page. What must you do first?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Contact Salesforce support to release the URL."
                    },
                    {
                        "id": "B",
                        "text": "Clear the vanity URL from the original landing page record and publish the change, or delete the original record."
                    },
                    {
                        "id": "C",
                        "text": "Unpublish the original landing page, which automatically releases the vanity URL."
                    },
                    {
                        "id": "D",
                        "text": "Create a 301 redirect in the domain settings."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Clear the vanity URL from the original landing page record and publish the change, or delete the original record. A vanity URL can only be used on one landing page at a time. You must release it from the old page before it can be saved on the new one."
            },
            {
                "id": "q45",
                "text": "What does the \"Unique Submissions\" metric represent on a Landing Page report?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The number of times a form was successfully submitted."
                    },
                    {
                        "id": "B",
                        "text": "The number of individual visitors who submitted a form on the landing page, removing multiple submissions from the same visitor."
                    },
                    {
                        "id": "C",
                        "text": "The number of visitors who converted to a prospect."
                    },
                    {
                        "id": "D",
                        "text": "The total number of link clicks from the thank you page."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The number of individual visitors who submitted a form on the landing page, removing multiple submissions from the same visitor. Unique Submissions filters out repeat submissions from the same prospect to show the actual number of individuals who completed the form."
            },
            {
                "id": "q46",
                "text": "You are running a Multivariate Test on your classic landing pages. Why might you not see the \"Multivariate test views\" in your individual landing page reports?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The test has not reached statistical significance."
                    },
                    {
                        "id": "B",
                        "text": "Multivariate test views don't appear in individual landing page reports; they appear in the Multivariate Test Statistics table."
                    },
                    {
                        "id": "C",
                        "text": "You need to enable Engagement History to see multivariate views."
                    },
                    {
                        "id": "D",
                        "text": "The views are only tracked if the prospect converts."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Multivariate test views don't appear in individual landing page reports; they appear in the Multivariate Test Statistics table. When a page is part of a multivariate test, its views and stats roll up to the Multivariate Test report instead of the individual landing page report."
            },
            {
                "id": "q47",
                "text": "A Multivariate Test determines the \"Top Performer\" based on which metric?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Total Views"
                    },
                    {
                        "id": "B",
                        "text": "Unique Clicks"
                    },
                    {
                        "id": "C",
                        "text": "Conversion Rate"
                    },
                    {
                        "id": "D",
                        "text": "Total Submissions"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Conversion Rate Multivariate tests determine the top-performing page based on the rate of conversions (successful form submissions divided by landing page views)."
            },
            {
                "id": "q48",
                "text": "What is a prerequisite for using most Engagement History features in Salesforce?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A dedicated CRM Analytics license"
                    },
                    {
                        "id": "B",
                        "text": "Connected Campaigns must be enabled"
                    },
                    {
                        "id": "C",
                        "text": "The Account Engagement Growth edition"
                    },
                    {
                        "id": "D",
                        "text": "A custom Salesforce CMS workspace"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Connected Campaigns must be enabled Engagement History relies on the syncing between Account Engagement and Salesforce campaigns to display data. Connected Campaigns is a mandatory prerequisite."
            },
            {
                "id": "q49",
                "text": "Which Salesforce object can display the \"Engagement History Custom Lightning Component\" to show how people interact with marketing assets?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Campaign"
                    },
                    {
                        "id": "B",
                        "text": "Opportunity"
                    },
                    {
                        "id": "C",
                        "text": "Lead, Contact, and Person Account"
                    },
                    {
                        "id": "D",
                        "text": "User"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Lead, Contact, and Person Account The \"Engagement History Custom Lightning Component\" (which shows a feed of recent prospect engagement) can be added to Lead, Contact, and Person Account page layouts."
            },
            {
                "id": "q50",
                "text": "An admin added the Engagement History Dashboard to a Campaign record, but it only updates periodically. How frequently is the data for the Engagement History Dashboard updated?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Real-time"
                    },
                    {
                        "id": "B",
                        "text": "Every 1 hour"
                    },
                    {
                        "id": "C",
                        "text": "Every 8 hours"
                    },
                    {
                        "id": "D",
                        "text": "Every 24 hours"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Every 8 hours The Engagement History Dashboard (built on CRM Analytics) is refreshed every 8 hours."
            }
        ]
    },
    {
        "id": "exam_4",
        "title": "4-MarketingStrategyWithAccountEngagement",
        "questions": [
            {
                "id": "q1",
                "text": "What are the two main building blocks that are the foundation of any good marketing strategy?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Lead generation and lead nurturing"
                    },
                    {
                        "id": "B",
                        "text": "Scoring and grading"
                    },
                    {
                        "id": "C",
                        "text": "Sales and marketing"
                    },
                    {
                        "id": "D",
                        "text": "Custom redirects and completion actions"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Lead generation and lead nurturing are the two foundational building blocks of a solid marketing strategy in Account Engagement."
            },
            {
                "id": "q2",
                "text": "Lead generation is at what part of the sales funnel?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The bottom"
                    },
                    {
                        "id": "B",
                        "text": "The middle"
                    },
                    {
                        "id": "C",
                        "text": "The top"
                    },
                    {
                        "id": "D",
                        "text": "The middle two thirds"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Lead generation is typically at the top of the sales funnel, focusing on attracting and capturing initial interest."
            },
            {
                "id": "q3",
                "text": "How does Account Engagement help your lead nurturing efforts?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It sends all leads to sales right away."
                    },
                    {
                        "id": "B",
                        "text": "It automates your tasks."
                    },
                    {
                        "id": "C",
                        "text": "It sends all leads to marketing."
                    },
                    {
                        "id": "D",
                        "text": "It automates your leads."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Account Engagement helps lead nurturing by automatically sending targeted, relevant content to prospects over time based on their behavior and profile."
            },
            {
                "id": "q4",
                "text": "What is the primary purpose of Engagement Studio in a marketing strategy?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To automate lead nurturing campaigns"
                    },
                    {
                        "id": "B",
                        "text": "To create custom redirects"
                    },
                    {
                        "id": "C",
                        "text": "To score leads manually"
                    },
                    {
                        "id": "D",
                        "text": "To track link clicks on third-party sites"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Engagement Studio's primary purpose is to build complex, automated marketing campaigns that guide prospects through a customized journey based on logic and actions."
            },
            {
                "id": "q5",
                "text": "What does Einstein Lead Scoring use to discover patterns of lead conversion?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Rules-based lead scoring approaches"
                    },
                    {
                        "id": "B",
                        "text": "Data science and machine learning"
                    },
                    {
                        "id": "C",
                        "text": "Manual grading profiles"
                    },
                    {
                        "id": "D",
                        "text": "Completion actions"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Einstein Lead Scoring uses machine learning on your past lead conversion data to discover patterns and determine which leads are most likely to convert."
            },
            {
                "id": "q6",
                "text": "How often does Einstein reanalyze lead data and refresh scores?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Every 24 hours"
                    },
                    {
                        "id": "B",
                        "text": "Every 4 hours"
                    },
                    {
                        "id": "C",
                        "text": "Every 10 days"
                    },
                    {
                        "id": "D",
                        "text": "Every 30 days"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Einstein automatically reanalyzes your lead data every 10 days to ensure the scoring model remains accurate and up-to-date."
            },
            {
                "id": "q7",
                "text": "If you don't have enough lead conversion data to build your own predictive model, what does Einstein Lead Scoring use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A baseline model"
                    },
                    {
                        "id": "B",
                        "text": "A global model"
                    },
                    {
                        "id": "C",
                        "text": "A static list"
                    },
                    {
                        "id": "D",
                        "text": "A custom redirect"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "If your org lacks sufficient data, Einstein uses a global model built from anonymous, aggregated data across many Salesforce customers."
            },
            {
                "id": "q8",
                "text": "Where does the lead score appear in Lightning Experience?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "In the Engagement Studio dashboard"
                    },
                    {
                        "id": "B",
                        "text": "In the Einstein Score component on lead detail pages"
                    },
                    {
                        "id": "C",
                        "text": "In the B2B Marketing Analytics app"
                    },
                    {
                        "id": "D",
                        "text": "In the Custom Redirect report"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The Einstein Lead Score appears in a dedicated lightning component on the Lead detail page in Lightning Experience."
            },
            {
                "id": "q9",
                "text": "Which of the following is NOT a dashboard report included with Einstein Lead Scoring?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Average Lead Score by Lead Source"
                    },
                    {
                        "id": "B",
                        "text": "Conversion Rate by Lead Score"
                    },
                    {
                        "id": "C",
                        "text": "Lead Score Distribution: Converted and Lost Opportunities"
                    },
                    {
                        "id": "D",
                        "text": "Average Engagement by Email Subject"
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "While Einstein provides specific insights on lead scoring, a generic 'Conversion Rate Dashboard' is not a dedicated Einstein Lead Scoring dashboard."
            },
            {
                "id": "q10",
                "text": "In Account Engagement, scoring is based on ____, and grading is based on ____.",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "who a prospect is, what a prospect does"
                    },
                    {
                        "id": "B",
                        "text": "what a prospect does, who a prospect is"
                    },
                    {
                        "id": "C",
                        "text": "Einstein models, automation rules"
                    },
                    {
                        "id": "D",
                        "text": "static lists, dynamic lists"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Scoring is based on implicit behavior (what they do), while grading is based on explicit demographics and firmographics (who they are)."
            },
            {
                "id": "q11",
                "text": "According to the default scoring system, how many points are assessed for a Custom Redirect Click?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "+1"
                    },
                    {
                        "id": "B",
                        "text": "+3"
                    },
                    {
                        "id": "C",
                        "text": "+10"
                    },
                    {
                        "id": "D",
                        "text": "+50"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "By default, Account Engagement assigns 3 points for a custom redirect click."
            },
            {
                "id": "q12",
                "text": "How many points are assessed for a successful Form Submission in the default scoring system?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "+3"
                    },
                    {
                        "id": "B",
                        "text": "+10"
                    },
                    {
                        "id": "C",
                        "text": "+50"
                    },
                    {
                        "id": "D",
                        "text": "+100"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "A successful form submission grants 50 points by default in Account Engagement."
            },
            {
                "id": "q13",
                "text": "What happens to a prospect's score when an associated opportunity is lost?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "-5 points"
                    },
                    {
                        "id": "B",
                        "text": "-50 points"
                    },
                    {
                        "id": "C",
                        "text": "-100 points"
                    },
                    {
                        "id": "D",
                        "text": "Score is reset to zero"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "By default, if a related opportunity is lost, the prospect's score is decreased by 100 points."
            },
            {
                "id": "q14",
                "text": "True or false: You can manually edit category scores on prospect records.",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "True"
                    },
                    {
                        "id": "B",
                        "text": "False"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "You cannot manually edit scoring categories on prospect records. They are calculated automatically based on specific folder and asset interactions."
            },
            {
                "id": "q15",
                "text": "What is the maximum number of scoring categories you can create?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "10"
                    },
                    {
                        "id": "B",
                        "text": "50"
                    },
                    {
                        "id": "C",
                        "text": "100"
                    },
                    {
                        "id": "D",
                        "text": "Unlimited"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "You can create a maximum of 50 scoring categories in Account Engagement."
            },
            {
                "id": "q16",
                "text": "Which feature should you use to score prospects on more than one product or business unit?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Grading profiles"
                    },
                    {
                        "id": "B",
                        "text": "Scoring categories"
                    },
                    {
                        "id": "C",
                        "text": "Einstein Behavior Scoring"
                    },
                    {
                        "id": "D",
                        "text": "Automation rules"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Scoring Categories allow you to track and score prospect engagement at a granular level based on specific products or business units."
            },
            {
                "id": "q17",
                "text": "When a prospect converts, what grade are they assigned by default?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A"
                    },
                    {
                        "id": "B",
                        "text": "C"
                    },
                    {
                        "id": "C",
                        "text": "D"
                    },
                    {
                        "id": "D",
                        "text": "F"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "When a visitor converts to a prospect, they are assigned a default grade of D."
            },
            {
                "id": "q18",
                "text": "What happens when you delete an asset with an assigned scoring category?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The category is moved to the recycle bin."
                    },
                    {
                        "id": "B",
                        "text": "The previously added points from that asset are removed from prospects' scores."
                    },
                    {
                        "id": "C",
                        "text": "The prospect's grade is decreased."
                    },
                    {
                        "id": "D",
                        "text": "The category score remains unchanged."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "When an asset with an assigned scoring category is deleted, the category score associated with that asset is also permanently removed from prospect records."
            },
            {
                "id": "q19",
                "text": "How much does a grade increase or decrease when a criterion matches or doesn't match?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "By one full letter grade"
                    },
                    {
                        "id": "B",
                        "text": "By one-third of a letter grade"
                    },
                    {
                        "id": "C",
                        "text": "By the amount specified in the prospect's assigned profile"
                    },
                    {
                        "id": "D",
                        "text": "By half a letter grade"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "A grade typically increases or decreases by 1/3, 2/3, or a full letter grade when a profile criterion matches or does not match."
            },
            {
                "id": "q20",
                "text": "Which of the following is the recommended way to automate matching criteria for grading?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A single automation rule to assign a profile and match criteria"
                    },
                    {
                        "id": "B",
                        "text": "Separate automation rules for assigning a profile and matching criteria"
                    },
                    {
                        "id": "C",
                        "text": "Engagement Studio"
                    },
                    {
                        "id": "D",
                        "text": "Custom redirects"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Automation Rules are the recommended way to automatically evaluate prospect data and update profile criteria matching statuses."
            },
            {
                "id": "q21",
                "text": "What happens if you edit profile criteria?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The profile is deleted."
                    },
                    {
                        "id": "B",
                        "text": "The associated prospects are regraded."
                    },
                    {
                        "id": "C",
                        "text": "Automation rules are paused."
                    },
                    {
                        "id": "D",
                        "text": "Category scores are recalculated."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "When profile criteria are edited, grades are retroactively recalculated for all prospects assigned to that profile."
            },
            {
                "id": "q22",
                "text": "Einstein Behavior Scoring identifies prospects who are ready to buy based on what?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Their grading profile"
                    },
                    {
                        "id": "B",
                        "text": "Einstein's engagement model"
                    },
                    {
                        "id": "C",
                        "text": "Manual score adjustments"
                    },
                    {
                        "id": "D",
                        "text": "Lead source"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Einstein Behavior Scoring focuses specifically on past engagement behavior (email clicks, web visits) to identify buying signals."
            },
            {
                "id": "q23",
                "text": "How much data is recommended for Einstein Behavior Scoring to work best?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "1 month of engagement data"
                    },
                    {
                        "id": "B",
                        "text": "3 months of engagement data"
                    },
                    {
                        "id": "C",
                        "text": "6 months of engagement data and at least 20 prospects linked to opportunities"
                    },
                    {
                        "id": "D",
                        "text": "12 months of engagement data"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Einstein Behavior Scoring typically requires at least six months of engagement data and at least 20 prospects connected to opportunities to build a reliable model."
            },
            {
                "id": "q24",
                "text": "How often are Einstein Behavior scores typically updated?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Every 4 hours"
                    },
                    {
                        "id": "B",
                        "text": "Every 24 hours"
                    },
                    {
                        "id": "C",
                        "text": "Every 10 days"
                    },
                    {
                        "id": "D",
                        "text": "Real-time"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Einstein Behavior Scores are recalculated and updated daily based on the latest prospect engagement data."
            },
            {
                "id": "q25",
                "text": "What does the \"rationale\" in Einstein Behavior Scoring provide?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A grade based on profile criteria"
                    },
                    {
                        "id": "B",
                        "text": "A positive or negative factor explaining why the prospect scored the way they did"
                    },
                    {
                        "id": "C",
                        "text": "An attribution model"
                    },
                    {
                        "id": "D",
                        "text": "A prediction of the next activity"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The 'rationale' explains the key factors\u2014both positive and negative\u2014that most strongly influenced the prospect's behavior score."
            },
            {
                "id": "q26",
                "text": "Which permission set is required to use the Einstein Behavior Scoring dashboard in B2B Marketing Analytics?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement Administrator"
                    },
                    {
                        "id": "B",
                        "text": "Analytics Integration User"
                    },
                    {
                        "id": "C",
                        "text": "Sales Cloud User, Service Cloud User, or CRM User"
                    },
                    {
                        "id": "D",
                        "text": "Marketing role"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Accessing the B2B Marketing Analytics dashboards for Einstein requires the appropriate B2BMA Canvas or Plus permission sets."
            },
            {
                "id": "q27",
                "text": "Einstein Campaign Insights uses machine learning to find data related to which of the following? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Engagement activity"
                    },
                    {
                        "id": "B",
                        "text": "Content"
                    },
                    {
                        "id": "C",
                        "text": "Audience characteristics"
                    },
                    {
                        "id": "D",
                        "text": "Grading profiles"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "C"
                ],
                "explanation": "Campaign Insights analyzes engagement patterns, specific audience segments, and overall email performance to provide actionable recommendations."
            },
            {
                "id": "q28",
                "text": "How often are Campaign Insights updated?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Every 4 hours, or when a new insight is detected"
                    },
                    {
                        "id": "B",
                        "text": "Every 24 hours"
                    },
                    {
                        "id": "C",
                        "text": "Every 10 days"
                    },
                    {
                        "id": "D",
                        "text": "Real-time"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Einstein Campaign Insights are updated daily to reflect the latest campaign performance trends."
            },
            {
                "id": "q29",
                "text": "Einstein Attribution is based on a concept from cooperative game theory called what?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The Nash Equilibrium"
                    },
                    {
                        "id": "B",
                        "text": "The Shapley Value"
                    },
                    {
                        "id": "C",
                        "text": "The Zero-Sum Game"
                    },
                    {
                        "id": "D",
                        "text": "The Pareto Principle"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Einstein Attribution utilizes the Shapley Value, a concept from cooperative game theory, to fairly distribute credit across multiple touchpoints."
            },
            {
                "id": "q30",
                "text": "To fill the gap when users don't create Opportunity Contact Roles, what does Einstein Attribution do?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It requires manual input."
                    },
                    {
                        "id": "B",
                        "text": "It uses a static list."
                    },
                    {
                        "id": "C",
                        "text": "It creates virtual opportunity contact roles by analyzing tasks, emails, and events."
                    },
                    {
                        "id": "D",
                        "text": "It assigns 100% credit to the first touch."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Einstein Attribution creates Virtual Opportunity Contact Roles using pattern matching to bridge the gap when users fail to manually create contact roles."
            },
            {
                "id": "q31",
                "text": "What is the default time frame the Einstein Attribution model scans for campaign and opportunity relationships prior to opportunity creation?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "30 days"
                    },
                    {
                        "id": "B",
                        "text": "90 days"
                    },
                    {
                        "id": "C",
                        "text": "6 months"
                    },
                    {
                        "id": "D",
                        "text": "12 months"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "By default, the model scans for relationships up to 6 months prior to opportunity creation."
            },
            {
                "id": "q32",
                "text": "What does Einstein Send Time Optimization evaluate to recommend optimal send times?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Industry benchmarks"
                    },
                    {
                        "id": "B",
                        "text": "Historical email engagement data from Account Engagement"
                    },
                    {
                        "id": "C",
                        "text": "Google Analytics data"
                    },
                    {
                        "id": "D",
                        "text": "Prospect time zones"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Einstein Send Time Optimization evaluates past engagement behavior across all emails to predict the optimal time a specific prospect is likely to open an email."
            },
            {
                "id": "q33",
                "text": "What does Einstein Engagement Frequency scan to predict if prospects receive too many or too few emails?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Engagement behaviors"
                    },
                    {
                        "id": "B",
                        "text": "Unsubscribe rates"
                    },
                    {
                        "id": "C",
                        "text": "Spam complaints"
                    },
                    {
                        "id": "D",
                        "text": "List size"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Engagement Frequency scans sending volume and prospect engagement to determine email fatigue and optimal frequency."
            },
            {
                "id": "q34",
                "text": "Einstein Key Accounts Identification assigns a tier ranking from A to D. What does an A tier indicate?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Lowest likelihood of success"
                    },
                    {
                        "id": "B",
                        "text": "Highest likelihood of success"
                    },
                    {
                        "id": "C",
                        "text": "Needs more data"
                    },
                    {
                        "id": "D",
                        "text": "Average likelihood of success"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "An 'A' tier ranking indicates a high likelihood to purchase based on the account's characteristics and engagement."
            },
            {
                "id": "q35",
                "text": "How long can the training period for Einstein Key Accounts Identification last?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Up to 4 hours"
                    },
                    {
                        "id": "B",
                        "text": "Up to 24 hours"
                    },
                    {
                        "id": "C",
                        "text": "Up to 72 hours"
                    },
                    {
                        "id": "D",
                        "text": "Up to 10 days"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "The initial training period for the Key Accounts Identification model can take up to 72 hours to complete."
            },
            {
                "id": "q36",
                "text": "Which type of list is rule-based and automatically updates when a prospect's data changes?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Static list"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic list"
                    },
                    {
                        "id": "C",
                        "text": "CRM visible list"
                    },
                    {
                        "id": "D",
                        "text": "Suppression list"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "A Dynamic List is rule-based and automatically adds or removes prospects as their data changes to meet or fail the criteria."
            },
            {
                "id": "q37",
                "text": "Which of the following is a consideration when using dynamic lists? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "You can't manually add or remove prospects."
                    },
                    {
                        "id": "B",
                        "text": "They can't be used as CRM visible lists."
                    },
                    {
                        "id": "C",
                        "text": "They can't be used for list imports."
                    },
                    {
                        "id": "D",
                        "text": "They can be used as recipient lists."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
                "explanation": "Dynamic lists continuously update, cannot be manually edited, can be used for sends or suppressions, and may take time to initially populate depending on database size."
            },
            {
                "id": "q38",
                "text": "True or false: You can convert a dynamic list to a static list if you want to manually edit its membership.",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "True"
                    },
                    {
                        "id": "B",
                        "text": "False"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "You can convert a dynamic list to a static list if you need to manually add or remove prospects, but it cannot be converted back."
            },
            {
                "id": "q39",
                "text": "What tool should you use to divide a list into multiple smaller lists for A/B testing?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Split List tool"
                    },
                    {
                        "id": "B",
                        "text": "Automation rule"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic list"
                    },
                    {
                        "id": "D",
                        "text": "Custom redirect"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "The List Split tool allows you to easily divide a list into multiple smaller segments or a specific percentage for A/B testing."
            },
            {
                "id": "q40",
                "text": "What happens when you delete a list?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospects on the list are also deleted."
                    },
                    {
                        "id": "B",
                        "text": "The list is moved to the recycle bin, but prospects are not deleted."
                    },
                    {
                        "id": "C",
                        "text": "The list is permanently deleted immediately."
                    },
                    {
                        "id": "D",
                        "text": "Automations using the list are paused."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Deleting a list moves the list itself to the Recycle Bin, but the prospects on the list remain untouched in the database."
            },
            {
                "id": "q41",
                "text": "Why would you archive a list?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To delete the prospects on the list"
                    },
                    {
                        "id": "B",
                        "text": "To manually edit its membership"
                    },
                    {
                        "id": "C",
                        "text": "To clean up the number of lists displayed in the Lists table"
                    },
                    {
                        "id": "D",
                        "text": "To split it for A/B testing"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Archiving a list removes it from your immediate view and dropdown menus to reduce clutter, without permanently deleting the list or its historical data."
            },
            {
                "id": "q42",
                "text": "How many lists can you add a prospect to at one time from the prospect record in Salesforce?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "1"
                    },
                    {
                        "id": "B",
                        "text": "5"
                    },
                    {
                        "id": "C",
                        "text": "10"
                    },
                    {
                        "id": "D",
                        "text": "50"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "You can manually add a prospect to multiple static lists at once from their record, up to system limits."
            },
            {
                "id": "q43",
                "text": "Which of the following can you use to group and filter prospects and other Account Engagement items?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Folders"
                    },
                    {
                        "id": "B",
                        "text": "Tags"
                    },
                    {
                        "id": "C",
                        "text": "Campaigns"
                    },
                    {
                        "id": "D",
                        "text": "Profiles"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Tags provide a flexible, lightweight way to group, sort, and filter prospects, assets, and other items in Account Engagement."
            },
            {
                "id": "q44",
                "text": "What happens when you delete a tag?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It is moved to the recycle bin."
                    },
                    {
                        "id": "B",
                        "text": "It is permanently removed from all assets and prospects."
                    },
                    {
                        "id": "C",
                        "text": "It is archived."
                    },
                    {
                        "id": "D",
                        "text": "The assets with the tag are deleted."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Deleting a tag permanently removes it from the system and strips it from all assets and prospects it was attached to. It does not go to the Recycle Bin."
            },
            {
                "id": "q45",
                "text": "Custom redirects have a throttling period of how long?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "5 minutes"
                    },
                    {
                        "id": "B",
                        "text": "15 minutes"
                    },
                    {
                        "id": "C",
                        "text": "30 minutes"
                    },
                    {
                        "id": "D",
                        "text": "4 hours"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Custom redirects have a 30-minute throttling period to prevent duplicate completion actions from a single prospect rapidly clicking."
            },
            {
                "id": "q46",
                "text": "How long are autoresponder completion actions throttled for custom redirects?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "30 minutes"
                    },
                    {
                        "id": "B",
                        "text": "1 hour"
                    },
                    {
                        "id": "C",
                        "text": "4 hours"
                    },
                    {
                        "id": "D",
                        "text": "24 hours"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Autoresponder emails triggered by custom redirect completion actions are throttled for 4 hours to prevent spamming."
            },
            {
                "id": "q47",
                "text": "What happens if a visitor who hasn't converted to a prospect clicks a custom redirect with completion actions?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The completion actions execute immediately."
                    },
                    {
                        "id": "B",
                        "text": "The completion actions are queued until they convert."
                    },
                    {
                        "id": "C",
                        "text": "The completion actions do not execute, but the click appears in their activity after they convert."
                    },
                    {
                        "id": "D",
                        "text": "The click is not tracked."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Anonymous visitors are tracked. If they later convert, the past click is associated with their record and completion actions are applied retroactively."
            },
            {
                "id": "q48",
                "text": "What is the requirement to see behavior scores in Account Engagement if using the original connector?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Enable Connected Campaigns"
                    },
                    {
                        "id": "B",
                        "text": "Assign the CRM User, Sales User, or Service User permission set to the connector user"
                    },
                    {
                        "id": "C",
                        "text": "Use the Analytics Integration User"
                    },
                    {
                        "id": "D",
                        "text": "Assign the Account Engagement Administrator role"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "To sync and display behavior scores when using older connector versions, B2BMA integration must be fully enabled and mapped."
            },
            {
                "id": "q49",
                "text": "What happens to a prospect's Behavior Score when it is linked to an opportunity?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The score increases."
                    },
                    {
                        "id": "B",
                        "text": "The score decreases."
                    },
                    {
                        "id": "C",
                        "text": "The model marks the prospect as converted and it is no longer scored."
                    },
                    {
                        "id": "D",
                        "text": "The score is reset."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Once a prospect is linked to a closed opportunity, their specific Behavior Score is no longer actively calculated, as the goal (conversion) has been met."
            },
            {
                "id": "q50",
                "text": "In Einstein Campaign Insights, what happens when a prospect record doesn't contain values for fields like Job Title or Industry?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The insight is discarded."
                    },
                    {
                        "id": "B",
                        "text": "The model explores associated lead, contact, and account records for the missing information."
                    },
                    {
                        "id": "C",
                        "text": "A default value is used."
                    },
                    {
                        "id": "D",
                        "text": "The prospect is excluded from the campaign."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "If fields like Job Title are blank, Einstein simply ignores those fields for that prospect and relies on other available data points."
            }
        ]
    },
    {
        "id": "exam_5",
        "title": "5-EmailMarketing",
        "questions": [
            {
                "id": "q1",
                "text": "What is the primary difference between an email template and a list email in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Email templates can only be used for autoresponders, while list emails are for newsletters."
                    },
                    {
                        "id": "B",
                        "text": "Email templates can be reused multiple times, while a list email can only be sent once."
                    },
                    {
                        "id": "C",
                        "text": "List emails support dynamic content, but email templates do not."
                    },
                    {
                        "id": "D",
                        "text": "Email templates do not require an unsubscribe link, while list emails do."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q2",
                "text": "Which of the following email authentication methods are recommended to be set up in Account Engagement to improve deliverability? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "SPF"
                    },
                    {
                        "id": "B",
                        "text": "DKIM"
                    },
                    {
                        "id": "C",
                        "text": "DMARC"
                    },
                    {
                        "id": "D",
                        "text": "SSL"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q3",
                "text": "What does a Validation Key do in Account Engagement email authentication?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It encrypts the email content."
                    },
                    {
                        "id": "B",
                        "text": "It verifies ownership of the sending domain."
                    },
                    {
                        "id": "C",
                        "text": "It checks the HTML for spam trigger words."
                    },
                    {
                        "id": "D",
                        "text": "It validates the email addresses of the recipients."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q4",
                "text": "What attribute would you add to an HTML element in an email template to ensure users can copy the element when building their email?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement-editable"
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement-region copy"
                    },
                    {
                        "id": "C",
                        "text": "Account Engagement-repeatable"
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement-removable"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q5",
                "text": "In an Email Template report, what constitutes a 'Hard Bounce'?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "An email that is permanently undeliverable due to a non-existent domain or invalid address."
                    },
                    {
                        "id": "B",
                        "text": "An email that is temporarily undeliverable because the mailbox is full."
                    },
                    {
                        "id": "C",
                        "text": "An email that was blocked by the recipient's spam filter."
                    },
                    {
                        "id": "D",
                        "text": "An email that the recipient manually marked as spam."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q6",
                "text": "How many soft bounces must occur before Account Engagement marks a prospect as a hard bounce?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "1"
                    },
                    {
                        "id": "B",
                        "text": "3"
                    },
                    {
                        "id": "C",
                        "text": "5"
                    },
                    {
                        "id": "D",
                        "text": "10"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q7",
                "text": "Which of the following are required for CAN-SPAM compliance in Account Engagement emails? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "An unsubscribe link or email preference center link"
                    },
                    {
                        "id": "B",
                        "text": "A link to the company's privacy policy"
                    },
                    {
                        "id": "C",
                        "text": "The sender's physical mailing address"
                    },
                    {
                        "id": "D",
                        "text": "A double opt-in confirmation"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q8",
                "text": "How is the 'Unique Clicks' metric calculated in an Email Template Report?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The total number of times any link was clicked."
                    },
                    {
                        "id": "B",
                        "text": "The number of prospects who clicked a link in the email, counting only one click per prospect."
                    },
                    {
                        "id": "C",
                        "text": "The total clicks minus the unsubscribe link clicks."
                    },
                    {
                        "id": "D",
                        "text": "The number of distinct links that received at least one click."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q9",
                "text": "When previewing an email template, how can you test its responsiveness for mobile devices?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Send a test email to a mobile device."
                    },
                    {
                        "id": "B",
                        "text": "Click 'Open in Popup' in the preview tab and manually resize the window."
                    },
                    {
                        "id": "C",
                        "text": "Change the device type in the 'Responsive' dropdown."
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement does not support responsive previews."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q10",
                "text": "What happens if a content region in an email template does NOT have an Account Engagement attribute tag?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It becomes fully editable by anyone."
                    },
                    {
                        "id": "B",
                        "text": "It is locked and not able to be edited."
                    },
                    {
                        "id": "C",
                        "text": "It is automatically removed when saving the template."
                    },
                    {
                        "id": "D",
                        "text": "It generates an HTML error."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q11",
                "text": "Which feature allows you to display different content to different prospects within the same email based on their field values?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Variable Tags"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "C",
                        "text": "Completion Actions"
                    },
                    {
                        "id": "D",
                        "text": "Responsive CSS"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q12",
                "text": "Which of the following is true regarding SPF authentication in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It encrypts the email transmission to the recipient."
                    },
                    {
                        "id": "B",
                        "text": "It guarantees 100% email deliverability."
                    },
                    {
                        "id": "C",
                        "text": "It is configured for you by default because emails are controlled by Salesforce."
                    },
                    {
                        "id": "D",
                        "text": "You must manually purchase an SPF certificate from a third party."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q13",
                "text": "Which metric in the Email Template Report indicates the percentage of prospects who received an email and also clicked a link in it?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Unique Clicks"
                    },
                    {
                        "id": "B",
                        "text": "Unique CTR (Click-Through-Rate)"
                    },
                    {
                        "id": "C",
                        "text": "Total CTR"
                    },
                    {
                        "id": "D",
                        "text": "HTML Open Rate"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q14",
                "text": "When adding the Account Engagement-repeatable attribute, which other attribute MUST the element also contain to function properly?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement-removable"
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement-region"
                    },
                    {
                        "id": "C",
                        "text": "Account Engagement-editable"
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement-duplicate"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q15",
                "text": "What is the primary purpose of DMARC in email authentication?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To encrypt emails between mail servers."
                    },
                    {
                        "id": "B",
                        "text": "To instruct receiving servers on what to do if SPF and DKIM checks fail."
                    },
                    {
                        "id": "C",
                        "text": "To validate the HTML structure of the email."
                    },
                    {
                        "id": "D",
                        "text": "To assign a dedicated IP address to the sender."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q16",
                "text": "What format do variable tags use in Account Engagement email templates?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "{{first_name}}"
                    },
                    {
                        "id": "B",
                        "text": "<<first_name>>"
                    },
                    {
                        "id": "C",
                        "text": "%%first_name%%"
                    },
                    {
                        "id": "D",
                        "text": "[[first_name]]"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q17",
                "text": "An open is recorded in Account Engagement when: (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "The email is successfully delivered to the inbox."
                    },
                    {
                        "id": "B",
                        "text": "Images load in the HTML version of the email."
                    },
                    {
                        "id": "C",
                        "text": "The prospect replies to the email."
                    },
                    {
                        "id": "D",
                        "text": "The prospect clicks a link in the email."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q18",
                "text": "Which of the following actions can you perform on a List Email draft?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Send it multiple times to different lists."
                    },
                    {
                        "id": "B",
                        "text": "Copy it and edit it for a new send."
                    },
                    {
                        "id": "C",
                        "text": "Use it as a template in an Engagement Program."
                    },
                    {
                        "id": "D",
                        "text": "Publish it to the Template Library."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q19",
                "text": "If a marketer wants to allow users to delete a specific section of an email template if they don't need it, what attribute should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement-editable"
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement-removable"
                    },
                    {
                        "id": "C",
                        "text": "Account Engagement-repeatable"
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement-delete"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q20",
                "text": "Which Account Engagement feature is highly recommended for building responsive emails without needing advanced HTML/CSS knowledge?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Media queries"
                    },
                    {
                        "id": "B",
                        "text": "Out-of-the-box responsive layouts from the layout library"
                    },
                    {
                        "id": "C",
                        "text": "Engagement Studio"
                    },
                    {
                        "id": "D",
                        "text": "Third-party plugins"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q21",
                "text": "What does the 'Total Delivered' metric represent?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "All emails sent"
                    },
                    {
                        "id": "B",
                        "text": "Emails sent minus hard bounces"
                    },
                    {
                        "id": "C",
                        "text": "Emails sent minus soft bounces"
                    },
                    {
                        "id": "D",
                        "text": "Emails sent minus hard and soft bounces"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q22",
                "text": "Can you use a list email in an Engagement Studio program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes"
                    },
                    {
                        "id": "B",
                        "text": "No"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q23",
                "text": "What happens to a prospect who clicks an unsubscribe link?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are deleted from Account Engagement"
                    },
                    {
                        "id": "B",
                        "text": "They are removed from future email sends"
                    },
                    {
                        "id": "C",
                        "text": "They are marked as a hard bounce"
                    },
                    {
                        "id": "D",
                        "text": "Their score is reset to 0"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q24",
                "text": "Which of the following is NOT a recommended section of an email template?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Header graphic"
                    },
                    {
                        "id": "B",
                        "text": "Call to action (CTA)"
                    },
                    {
                        "id": "C",
                        "text": "Social icons/sharing"
                    },
                    {
                        "id": "D",
                        "text": "Hidden tracking pixel script"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q25",
                "text": "Where should the Call to Action (CTA) ideally be placed in an email template?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "At the very bottom in the footer"
                    },
                    {
                        "id": "B",
                        "text": "In the subject line"
                    },
                    {
                        "id": "C",
                        "text": "Featured at the top of the email so it isn't overlooked"
                    },
                    {
                        "id": "D",
                        "text": "Hidden within a paragraph of text"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q26",
                "text": "If you want to use the same email design for a monthly newsletter, you should create a:",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "List Email"
                    },
                    {
                        "id": "B",
                        "text": "Autoresponder"
                    },
                    {
                        "id": "C",
                        "text": "Email Template"
                    },
                    {
                        "id": "D",
                        "text": "Variable Tag"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q27",
                "text": "What is an advantage of using 'AddThis' icons in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They automatically translate the email."
                    },
                    {
                        "id": "B",
                        "text": "They allow recipients to easily forward and share the email with their network."
                    },
                    {
                        "id": "C",
                        "text": "They bypass spam filters."
                    },
                    {
                        "id": "D",
                        "text": "They authenticate the email domain."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q28",
                "text": "How do you insert a variable tag into an email template?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Click the variable tag icon in the editor and choose from the list."
                    },
                    {
                        "id": "B",
                        "text": "You must write a custom Apex class."
                    },
                    {
                        "id": "C",
                        "text": "Use the 'Insert HTML' button."
                    },
                    {
                        "id": "D",
                        "text": "Variable tags can only be used in List Emails, not Templates."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q29",
                "text": "Which of the following is true about dynamic content in emails?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It can only be previewed after sending the email."
                    },
                    {
                        "id": "B",
                        "text": "You can verify dynamic content variations in the testing step."
                    },
                    {
                        "id": "C",
                        "text": "It is limited to the subject line."
                    },
                    {
                        "id": "D",
                        "text": "It requires custom CSS."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q30",
                "text": "When designing a template from scratch without selecting a layout, you should click:",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Apply"
                    },
                    {
                        "id": "B",
                        "text": "Skip"
                    },
                    {
                        "id": "C",
                        "text": "Next"
                    },
                    {
                        "id": "D",
                        "text": "Override"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q31",
                "text": "How do prospects see the name of an Email Template?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "In the 'From' address"
                    },
                    {
                        "id": "B",
                        "text": "In the Subject Line"
                    },
                    {
                        "id": "C",
                        "text": "They don't see the template name; it's for internal organization."
                    },
                    {
                        "id": "D",
                        "text": "In the footer of the email"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q32",
                "text": "What must be done to an email template draft before it can be used for emails?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It must be approved by a Salesforce Admin."
                    },
                    {
                        "id": "B",
                        "text": "It must be published."
                    },
                    {
                        "id": "C",
                        "text": "It must be assigned to a list."
                    },
                    {
                        "id": "D",
                        "text": "It must be tested via an Engagement Program."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q33",
                "text": "What does the 'HTML Open Rate' measure?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The total number of opens divided by total clicks."
                    },
                    {
                        "id": "B",
                        "text": "The percentage of unique HTML opens compared to the total number of emails delivered."
                    },
                    {
                        "id": "C",
                        "text": "The number of prospects who viewed the text version of the email."
                    },
                    {
                        "id": "D",
                        "text": "The percentage of emails that did not bounce."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q34",
                "text": "Does 'Total Clicks' include clicks on the unsubscribe link?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes"
                    },
                    {
                        "id": "B",
                        "text": "No"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q35",
                "text": "Which role is required to view an Email Template Report? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement Administrator"
                    },
                    {
                        "id": "B",
                        "text": "Marketing"
                    },
                    {
                        "id": "C",
                        "text": "Sales Manager"
                    },
                    {
                        "id": "D",
                        "text": "Sales User"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q36",
                "text": "Which email metric indicates the number of emails waiting to be sent?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Total Sent"
                    },
                    {
                        "id": "B",
                        "text": "Total Queued"
                    },
                    {
                        "id": "C",
                        "text": "Total Delivered"
                    },
                    {
                        "id": "D",
                        "text": "Soft Bounce"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q37",
                "text": "What happens if a user tries to edit an email template region that does not have the Account Engagement-region attribute?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The changes are saved locally."
                    },
                    {
                        "id": "B",
                        "text": "The region is locked and cannot be edited."
                    },
                    {
                        "id": "C",
                        "text": "The email fails to send."
                    },
                    {
                        "id": "D",
                        "text": "The region is deleted."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q38",
                "text": "Why might an email result in a soft bounce?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The domain name does not exist."
                    },
                    {
                        "id": "B",
                        "text": "The email address is invalid."
                    },
                    {
                        "id": "C",
                        "text": "The recipient's mailbox is full."
                    },
                    {
                        "id": "D",
                        "text": "The recipient unsubscribed."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q39",
                "text": "Which tool is recommended for testing how your email will look across different email clients and devices?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Email preference center"
                    },
                    {
                        "id": "B",
                        "text": "Variable tags"
                    },
                    {
                        "id": "C",
                        "text": "Advanced Email Analytics (Litmus) or testing step"
                    },
                    {
                        "id": "D",
                        "text": "DMARC"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q40",
                "text": "What does DKIM stand for?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "DomainKeys Identified Mail"
                    },
                    {
                        "id": "B",
                        "text": "Domain Knowledge Information Management"
                    },
                    {
                        "id": "C",
                        "text": "Data Key Internal Mail"
                    },
                    {
                        "id": "D",
                        "text": "Delivery Key Identified Message"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q41",
                "text": "What is SPF aimed at preventing?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Spam filters"
                    },
                    {
                        "id": "B",
                        "text": "Email spoofing"
                    },
                    {
                        "id": "C",
                        "text": "Bounces"
                    },
                    {
                        "id": "D",
                        "text": "Unsubscribes"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q42",
                "text": "If an email template is used in an autoresponder, where are the metrics for those sends tracked?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are not tracked."
                    },
                    {
                        "id": "B",
                        "text": "In the List Email report only."
                    },
                    {
                        "id": "C",
                        "text": "In the Email Template Report."
                    },
                    {
                        "id": "D",
                        "text": "In the Engagement Studio report only."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q43",
                "text": "When setting up email authentication, who generates the validation key?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The recipient's ISP"
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement"
                    },
                    {
                        "id": "C",
                        "text": "The user's IT department"
                    },
                    {
                        "id": "D",
                        "text": "Salesforce Support"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q44",
                "text": "Which of the following is true about 'Total Spam Complaints'?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It counts emails blocked by an ISP."
                    },
                    {
                        "id": "B",
                        "text": "It is the total number of prospects that reported an email as spam."
                    },
                    {
                        "id": "C",
                        "text": "It includes hard bounces."
                    },
                    {
                        "id": "D",
                        "text": "It automatically deletes the prospect."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q45",
                "text": "What is a recommended practice regarding older content in email marketing?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Never use older content."
                    },
                    {
                        "id": "B",
                        "text": "Reuse older content if it is timely and relevant."
                    },
                    {
                        "id": "C",
                        "text": "Only use content created within the last 30 days."
                    },
                    {
                        "id": "D",
                        "text": "Delete older content from the website."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q46",
                "text": "Can a list email be reused multiple times?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes, indefinitely"
                    },
                    {
                        "id": "B",
                        "text": "No, a list email can only be sent once."
                    },
                    {
                        "id": "C",
                        "text": "Yes, if saved as a template"
                    },
                    {
                        "id": "D",
                        "text": "No, unless it is a draft"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q47",
                "text": "Which attribute makes an element editable in Account Engagement email templates?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement-editable"
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement-region"
                    },
                    {
                        "id": "C",
                        "text": "Account Engagement-modify"
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement-write"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q48",
                "text": "If a recipient clicks the same link in an email 3 times, how many Unique Clicks are recorded?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "1"
                    },
                    {
                        "id": "B",
                        "text": "2"
                    },
                    {
                        "id": "C",
                        "text": "3"
                    },
                    {
                        "id": "D",
                        "text": "0"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q49",
                "text": "In Account Engagement, what is the prerequisite for sending emails from a specific domain?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The domain must be over 1 year old."
                    },
                    {
                        "id": "B",
                        "text": "You must own the domain and verify ownership via DNS."
                    },
                    {
                        "id": "C",
                        "text": "You must purchase the domain through Salesforce."
                    },
                    {
                        "id": "D",
                        "text": "You must have at least 1,000 prospects."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q50",
                "text": "Which report would you look at to see exactly WHICH prospects clicked the links in emails that used a specific template?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "View Click Report"
                    },
                    {
                        "id": "B",
                        "text": "Total Sent Report"
                    },
                    {
                        "id": "C",
                        "text": "Bounce Report"
                    },
                    {
                        "id": "D",
                        "text": "Open Report"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            }
        ]
    },
    {
        "id": "exam_6",
        "title": "6-EngagementStudio",
        "questions": [
            {
                "id": "q1",
                "text": "You want to begin an engagement program, but you only want emails to be sent out Monday through Friday between 10:00 AM and 4:00 PM. How should you configure this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Set up account-wide business hours to restrict sending."
                    },
                    {
                        "id": "B",
                        "text": "Configure the 'Send emails during business hours only' feature within the specific engagement program."
                    },
                    {
                        "id": "C",
                        "text": "Use a Rule step to evaluate the time of day before every Send Email action."
                    },
                    {
                        "id": "D",
                        "text": "Business hours cannot be restricted in Engagement Studio."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Business hours functionality is specific to each program, allowing you to have different business hours on different programs."
            },
            {
                "id": "q2",
                "text": "In your engagement program, a prospect reaches a 'Send Email' action step over the weekend. The program has 'Send emails during business hours only' selected, and the days are defined as Monday-Friday. What happens to the prospect?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect skips the step and moves to the next one."
                    },
                    {
                        "id": "B",
                        "text": "The prospect receives the email immediately despite the settings."
                    },
                    {
                        "id": "C",
                        "text": "The program waits to send the email until the prospect is within the defined business hours on Monday."
                    },
                    {
                        "id": "D",
                        "text": "The prospect is removed from the program."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- If a prospect reaches an email send step outside of business hours, Engagement Studio waits to send the email until the prospect is within business hours."
            },
            {
                "id": "q3",
                "text": "When working with a program in Engagement Studio, which of the following are main tabs you will interact with? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Build"
                    },
                    {
                        "id": "B",
                        "text": "Test"
                    },
                    {
                        "id": "C",
                        "text": "Report"
                    },
                    {
                        "id": "D",
                        "text": "Activity"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
                "explanation": "- The main tabs you interact with are Build, Test, Report, and Activity."
            },
            {
                "id": "q4",
                "text": "A marketer has just finished building the logic for an engagement program. What is the recommended next step before launching it?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Navigate to the Activity tab to view changes."
                    },
                    {
                        "id": "B",
                        "text": "Navigate to the Test tab to simulate the program as a prospect."
                    },
                    {
                        "id": "C",
                        "text": "Add a Suppression list to the program."
                    },
                    {
                        "id": "D",
                        "text": "Review the Report tab for preliminary metrics."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Before sending the first email, you should test out your logic by simulating the program as a prospect in the Test tab."
            },
            {
                "id": "q5",
                "text": "You need to ensure a program sends targeted emails to 'Upcoming Event Nurture' prospects but excludes those on the 'Competitors' list. How do you accomplish this in the engagement program setup?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Set 'Upcoming Event Nurture' as the Recipient List and 'Competitors' as the Suppression List."
                    },
                    {
                        "id": "B",
                        "text": "Add a Rule step to evaluate if a prospect is a competitor."
                    },
                    {
                        "id": "C",
                        "text": "Create a Trigger step to remove competitors."
                    },
                    {
                        "id": "D",
                        "text": "You must manually remove competitors from the recipient list before starting the program."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- When setting up the program, you select your Recipient List and your Suppression List to exclude specific prospects."
            },
            {
                "id": "q6",
                "text": "You have an engagement program that evaluates if a prospect clicks a link in an email. This evaluation must branch into \"yes\" and \"no\" paths based on their action. Which step type provides this capability?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Action"
                    },
                    {
                        "id": "B",
                        "text": "Rule"
                    },
                    {
                        "id": "C",
                        "text": "Trigger"
                    },
                    {
                        "id": "D",
                        "text": "Pause"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Triggers listen for an event to occur (like an email open or link click) within a specified period of days, creating \"yes\" and \"no\" branching paths."
            },
            {
                "id": "q7",
                "text": "In an active, running program, what must you do if you want to add new steps to the program logic?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Copy the program and add new steps to the copy."
                    },
                    {
                        "id": "B",
                        "text": "Pause the program first, and then access the Build tab to add steps."
                    },
                    {
                        "id": "C",
                        "text": "Re-create the program from scratch with the new steps."
                    },
                    {
                        "id": "D",
                        "text": "Access the Build tab and add the new steps without pausing."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- If you'd like to make changes after you start your program, you must pause it in order to access the Build tab for edits."
            },
            {
                "id": "q8",
                "text": "You want to check a prospect's job title at a specific point in the engagement program and route them differently based on whether their title contains \"CMO\". Which step type should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Action"
                    },
                    {
                        "id": "B",
                        "text": "Trigger"
                    },
                    {
                        "id": "C",
                        "text": "Rule"
                    },
                    {
                        "id": "D",
                        "text": "End"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Rules check for specified criteria or values in the system (like a job title field) and create paths based on the evaluation."
            },
            {
                "id": "q9",
                "text": "You are designing a strategy to score prospect responses. Which of the following activities is typically considered the most valuable indication of buying interest?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Opening an email"
                    },
                    {
                        "id": "B",
                        "text": "Clicking a link in an email"
                    },
                    {
                        "id": "C",
                        "text": "Submitting a form"
                    },
                    {
                        "id": "D",
                        "text": "Forwarding an email"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Form submissions are highly indicative of buying interest and are considered the most valuable response compared to email opens or clicks."
            },
            {
                "id": "q10",
                "text": "You want to personalize the greeting of your email with the prospect's First Name. Which Account Engagement feature should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "B",
                        "text": "Variable Tags"
                    },
                    {
                        "id": "C",
                        "text": "Triggers"
                    },
                    {
                        "id": "D",
                        "text": "Action Steps"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Variable tags let you personalize text based on a prospect's field values, such as First Name."
            },
            {
                "id": "q11",
                "text": "You want to show entirely different blocks of text or images based on a prospect's custom field value for 'CRM System'. Which feature is best suited for this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "B",
                        "text": "Variable Tags"
                    },
                    {
                        "id": "C",
                        "text": "Engagement Rules"
                    },
                    {
                        "id": "D",
                        "text": "Custom Triggers"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Dynamic content allows Account Engagement to adjust the text or images a prospect sees based on a specified field value."
            },
            {
                "id": "q12",
                "text": "You are implementing a 3-2-1 Campaign strategy. In what order should you target your prospects based on their stage?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Cold leads first, then Warm, then Hot."
                    },
                    {
                        "id": "B",
                        "text": "Warm leads first, then Hot, then Cold."
                    },
                    {
                        "id": "C",
                        "text": "Hot leads first, then Warm, then Cold."
                    },
                    {
                        "id": "D",
                        "text": "All leads should be targeted simultaneously."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- A 3-2-1 nurture program inverts traditional wisdom by following up with your hot leads first, then warm leads, leaving cold leads for last."
            },
            {
                "id": "q13",
                "text": "Which of the following are valid campaign strategies discussed for covering the customer lifecycle in Engagement Studio? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "3-2-1 Campaign"
                    },
                    {
                        "id": "B",
                        "text": "Onboarding Campaign"
                    },
                    {
                        "id": "C",
                        "text": "Renewal Campaign"
                    },
                    {
                        "id": "D",
                        "text": "Cart Abandonment Campaign"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "C"
                ],
                "explanation": "- 3-2-1 Campaigns, Onboarding Campaigns, and Renewal Campaigns are all use cases covered in Engagement Studio strategies."
            },
            {
                "id": "q14",
                "text": "You want to automate the process of sending introductory training resources and FAQs to new clients. Which type of campaign strategy is most appropriate?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "3-2-1 Campaign"
                    },
                    {
                        "id": "B",
                        "text": "Renewal Campaign"
                    },
                    {
                        "id": "C",
                        "text": "Onboarding Campaign"
                    },
                    {
                        "id": "D",
                        "text": "Cold Lead Campaign"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Onboarding campaigns automate repetitive tasks like providing introductory training resources and FAQs to new clients."
            },
            {
                "id": "q15",
                "text": "What happens to prospects if they reach the End step of an engagement program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They restart the program from the beginning."
                    },
                    {
                        "id": "B",
                        "text": "They wait on the End step until new steps are added."
                    },
                    {
                        "id": "C",
                        "text": "They can never progress further in the program."
                    },
                    {
                        "id": "D",
                        "text": "They are automatically added to a new program."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- The end step designates a permanent stopping point. Prospects who reach this point cannot progress further in the program."
            },
            {
                "id": "q16",
                "text": "You plan to add steps to your program in the future, but the program is already running. What is a best practice to keep prospects from reaching the permanent End step?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Pause the program indefinitely."
                    },
                    {
                        "id": "B",
                        "text": "Include a long wait step right before the end that acts as a buffer."
                    },
                    {
                        "id": "C",
                        "text": "Add a continuous loop using Rules."
                    },
                    {
                        "id": "D",
                        "text": "There is no way to prevent them from reaching the End step."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- To prevent prospects from reaching the end step while you plan to build out more steps, include a long wait step right before the end to act as a buffer."
            },
            {
                "id": "q17",
                "text": "If a prospect is sitting on an End node at the bottom of a branch, and you delete that entire branch, what does Account Engagement do with the prospect?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Removes them from the program entirely."
                    },
                    {
                        "id": "B",
                        "text": "Automatically places them on the other side of the rule or trigger that preceded the deleted branch."
                    },
                    {
                        "id": "C",
                        "text": "Keeps them stuck on the deleted node."
                    },
                    {
                        "id": "D",
                        "text": "Pauses their progression until an admin intervenes."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Account Engagement automatically places the prospects on the other side of the rule or trigger."
            },
            {
                "id": "q18",
                "text": "What happens if you schedule an email to send on a specific date in an Action step, but a prospect reaches the step after that date has passed?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect receives the email immediately."
                    },
                    {
                        "id": "B",
                        "text": "The prospect waits indefinitely on that step."
                    },
                    {
                        "id": "C",
                        "text": "The prospect skips the step and moves to the next one."
                    },
                    {
                        "id": "D",
                        "text": "The program pauses automatically."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- If you schedule emails to send on a specific date, prospects who reach the step after that date will skip the step."
            },
            {
                "id": "q19",
                "text": "A trigger step is set to evaluate a Custom Redirect click with the timing \"Up to a maximum of 2 days\". If the prospect clicks the custom redirect on day 1, what happens?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Engagement Studio waits the full 2 days before moving them down the \"yes\" path."
                    },
                    {
                        "id": "B",
                        "text": "Engagement Studio moves them down the \"yes\" path as soon as they take the action."
                    },
                    {
                        "id": "C",
                        "text": "Engagement Studio moves them down the \"no\" path immediately."
                    },
                    {
                        "id": "D",
                        "text": "Engagement Studio pauses the program."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- \"Up to a maximum of\" moves prospects down the \"yes\" path as soon as they take the action within the specified time frame."
            },
            {
                "id": "q20",
                "text": "Using the same trigger set to \"Up to a maximum of 2 days\", what happens if the prospect never clicks the custom redirect?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They remain on the step indefinitely."
                    },
                    {
                        "id": "B",
                        "text": "They move down the \"no\" path immediately when they reach the step."
                    },
                    {
                        "id": "C",
                        "text": "They move down the \"no\" path once the specified 2-day time frame ends."
                    },
                    {
                        "id": "D",
                        "text": "They are removed from the program."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- If prospects do not take the action, Engagement Studio takes them down the \"no\" path once the specified time frame ends."
            },
            {
                "id": "q21",
                "text": "You set an Action step to Send Email with the timing set to \"Wait 5 days\". When does the action occur?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Immediately when the prospect hits the step."
                    },
                    {
                        "id": "B",
                        "text": "Engagement Studio applies the action once the specified 5-day pause time has elapsed."
                    },
                    {
                        "id": "C",
                        "text": "The action occurs randomly within the 5-day window."
                    },
                    {
                        "id": "D",
                        "text": "Only if the prospect takes an action within 5 days."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Engagement Studio applies the action once the specified pause time has elapsed."
            },
            {
                "id": "q22",
                "text": "A prospect is on day 3 of a \"Wait 5 days\" step when you pause the entire engagement program. The program remains paused for 2 days. When you restart the program, where is the prospect in their wait period?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect starts over at day 1 of 5."
                    },
                    {
                        "id": "B",
                        "text": "The prospect has finished the wait period and moves to the next step immediately."
                    },
                    {
                        "id": "C",
                        "text": "The prospect is still on day 3 of 5, as if no time has elapsed while paused."
                    },
                    {
                        "id": "D",
                        "text": "The prospect is removed from the program."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- When you pause a program, time is effectively paused for prospects on wait steps. The prospect will still be on day 3 of 5 when restarted, as if no time has elapsed."
            },
            {
                "id": "q23",
                "text": "When scheduling individual emails within a program to send on a specific date (e.g., Nov 6, 2018), and you do not have \"Send only during business hours\" enabled, when will Engagement Studio send the email?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "At 8:00 AM on the specified date."
                    },
                    {
                        "id": "B",
                        "text": "Just after midnight on the morning of your scheduled send."
                    },
                    {
                        "id": "C",
                        "text": "At the exact time the prospect reached the step."
                    },
                    {
                        "id": "D",
                        "text": "At noon on the specified date."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Without business hours enabled, scheduled emails are sent just after midnight on the morning of your scheduled send."
            },
            {
                "id": "q24",
                "text": "If \"Send only during business hours\" is enabled, and an email is scheduled for a specific date, when does the email send?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Just after midnight on the scheduled date."
                    },
                    {
                        "id": "B",
                        "text": "When the \"Day Start\" time you've set on that date resumes."
                    },
                    {
                        "id": "C",
                        "text": "Exactly at 12:00 PM."
                    },
                    {
                        "id": "D",
                        "text": "Whenever the prospect logs in."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- With business hours enabled, Engagement Studio will send the scheduled email when the \"Day Start\" time you've set resumes."
            },
            {
                "id": "q25",
                "text": "Which of the following statements correctly distinguishes a Rule from a Trigger?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Rules wait for an action to happen; Triggers evaluate data at a moment in time."
                    },
                    {
                        "id": "B",
                        "text": "Rules evaluate prospect data at a moment in time; Triggers listen for an event to occur within a specified period of time."
                    },
                    {
                        "id": "C",
                        "text": "Rules can only have a \"yes\" path; Triggers can have \"yes\" and \"no\" paths."
                    },
                    {
                        "id": "D",
                        "text": "There is no functional difference between Rules and Triggers."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Rules evaluate data at a moment in time, whereas Triggers listen for an event to occur within a specified period of time."
            },
            {
                "id": "q26",
                "text": "You have an engagement program intended to drive event attendance. You want to handle pre-event and post-event communications. What is the recommended way to structure this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create separate programs for pre-event and post-event communications."
                    },
                    {
                        "id": "B",
                        "text": "Handle all pre- and post-event communications within the same program using scheduled email sends."
                    },
                    {
                        "id": "C",
                        "text": "Use only Triggers to manage the entire event flow."
                    },
                    {
                        "id": "D",
                        "text": "Rely exclusively on list emails instead of Engagement Studio."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- You can handle all pre- and post-event communications within the same program by scheduling email sends."
            },
            {
                "id": "q27",
                "text": "During the testing phase of your engagement program, what does the Test Log provide?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Real-time metrics of actual prospect engagement."
                    },
                    {
                        "id": "B",
                        "text": "Dates to help you understand the timeline of the program and visualize a prospect's possible paths."
                    },
                    {
                        "id": "C",
                        "text": "Errors in your email HTML."
                    },
                    {
                        "id": "D",
                        "text": "The exact score each prospect will receive."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The test log provides dates to help you understand the timeline of the program and visualize a prospect's possible paths."
            },
            {
                "id": "q28",
                "text": "You are building a program and have placed a form completion trigger. However, the form is located on a landing page. What is an important consideration for how Account Engagement records this activity?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Forms always take precedence over landing pages."
                    },
                    {
                        "id": "B",
                        "text": "A form completion on a landing page will always satisfy a form trigger."
                    },
                    {
                        "id": "C",
                        "text": "Landing pages take precedence, so you must use a landing page trigger instead of a form trigger."
                    },
                    {
                        "id": "D",
                        "text": "Triggers cannot evaluate forms hosted on landing pages."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Landing pages always take precedence over forms. A form view or completion on a landing page does not satisfy a form trigger; you must use a landing page trigger instead."
            },
            {
                "id": "q29",
                "text": "Which node designates the end of a program path?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The green start step"
                    },
                    {
                        "id": "B",
                        "text": "The blue action step"
                    },
                    {
                        "id": "C",
                        "text": "The orange rule step"
                    },
                    {
                        "id": "D",
                        "text": "The red end step"
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "- The red end step designates the end of the program path."
            },
            {
                "id": "q30",
                "text": "You schedule an engagement program to start on a specific date, but realize you are missing an email asset. What will Engagement Studio do?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Start the program anyway and skip the missing email."
                    },
                    {
                        "id": "B",
                        "text": "Pause the program immediately upon starting."
                    },
                    {
                        "id": "C",
                        "text": "Safety checks will alert you to missing assets before you can start."
                    },
                    {
                        "id": "D",
                        "text": "It will substitute the missing email with a default template."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Safety checks will alert you to missing assets if you attempt to schedule start and end dates."
            },
            {
                "id": "q31",
                "text": "In the context of a 3-2-1 campaign, what characterizes a \"Cold\" lead?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are ready to buy and should talk to sales."
                    },
                    {
                        "id": "B",
                        "text": "They know they have a problem your service might solve."
                    },
                    {
                        "id": "C",
                        "text": "They don't know they have a problem that you can solve and need education."
                    },
                    {
                        "id": "D",
                        "text": "They have recently renewed their contract."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Cold leads don't know they have a problem that you can solve and need to be educated."
            },
            {
                "id": "q32",
                "text": "What characterizes a \"Warm\" lead in a 3-2-1 campaign?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They don't know they have a problem you can solve."
                    },
                    {
                        "id": "B",
                        "text": "They know they have a problem your service might solve and need frequent nurturing."
                    },
                    {
                        "id": "C",
                        "text": "They are ready to talk to sales immediately."
                    },
                    {
                        "id": "D",
                        "text": "They have already submitted a purchase order."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Warm leads know they have a problem your service might solve and need to be nurtured frequently."
            },
            {
                "id": "q33",
                "text": "Which of the following is true about business hours in Engagement Studio?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Business hours apply to the entire Account Engagement instance and affect all programs."
                    },
                    {
                        "id": "B",
                        "text": "Business hours are specific to each engagement program, allowing different programs to have different hours."
                    },
                    {
                        "id": "C",
                        "text": "Business hours only apply to Triggers, not Actions."
                    },
                    {
                        "id": "D",
                        "text": "Business hours cannot be customized for different days of the week."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- This functionality is specific to each program, not the account."
            },
            {
                "id": "q34",
                "text": "If you want to check if a prospect is assigned to a user, which step type should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Action"
                    },
                    {
                        "id": "B",
                        "text": "Rule"
                    },
                    {
                        "id": "C",
                        "text": "Trigger"
                    },
                    {
                        "id": "D",
                        "text": "End"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- A rule step checks specified criteria or values in the system, such as assignment status."
            },
            {
                "id": "q35",
                "text": "A prospect reaches a Trigger step set to \"Wait 3 days\". The trigger is checking for an email open. What does this mean for the prospect's journey?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Engagement Studio executes the trigger once the specified pause time of 3 days has elapsed."
                    },
                    {
                        "id": "B",
                        "text": "The system checks immediately; the 3 days are only a suggestion."
                    },
                    {
                        "id": "C",
                        "text": "The prospect proceeds down the \"yes\" path immediately after opening the email, even if it's on day 1."
                    },
                    {
                        "id": "D",
                        "text": "Trigger steps cannot use a \"Wait X days\" timing; they only use \"Up to a maximum of\"."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- With the \"Wait\" timing on a trigger, Engagement Studio executes the trigger (checks if the action occurred) once the specified pause time has elapsed."
            },
            {
                "id": "q36",
                "text": "What is the key difference between \"Wait\" and \"Up to a maximum of\" for a Trigger step?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "\"Wait\" holds the prospect for the full duration before evaluating; \"Up to a maximum of\" evaluates and moves the prospect down the \"yes\" path as soon as the action occurs within the time frame."
                    },
                    {
                        "id": "B",
                        "text": "\"Wait\" is only used for Actions; \"Up to a maximum of\" is only used for Triggers."
                    },
                    {
                        "id": "C",
                        "text": "There is no functional difference; they behave identically."
                    },
                    {
                        "id": "D",
                        "text": "\"Wait\" moves the prospect down the \"yes\" path if the action is not taken; \"Up to a maximum of\" moves them down the \"no\" path."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- \"Wait\" holds the prospect for the entire duration, while \"Up to a maximum of\" evaluates immediately as soon as the action occurs within the allowed time."
            },
            {
                "id": "q37",
                "text": "Which of the following are the primary logic options used to branch and direct prospects in Engagement Studio? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Actions"
                    },
                    {
                        "id": "B",
                        "text": "Rules"
                    },
                    {
                        "id": "C",
                        "text": "Triggers"
                    },
                    {
                        "id": "D",
                        "text": "Lists"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "C"
                ],
                "explanation": "- You have three logic options: actions, rules, and triggers."
            },
            {
                "id": "q38",
                "text": "A Rule step is configured to check if the prospect's grade is greater than B. The timing is set to \"Wait 2 days\". How does this function?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The program immediately checks the grade and waits 2 days before moving the prospect."
                    },
                    {
                        "id": "B",
                        "text": "Engagement Studio holds the prospect for 2 days, and then evaluates the rule criteria."
                    },
                    {
                        "id": "C",
                        "text": "Engagement Studio continuously checks the grade for 2 days and moves them as soon as it exceeds B."
                    },
                    {
                        "id": "D",
                        "text": "Rule steps cannot have a \"Wait\" timing."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- For rules, \"Wait\" holds the prospect for the specified pause time, and then evaluates the rule criteria."
            },
            {
                "id": "q39",
                "text": "Where do tooltips containing high-level reporting statistics display in the Engagement Studio?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Only on the Report tab dashboard."
                    },
                    {
                        "id": "B",
                        "text": "Above each step in your program on the canvas in the Reporting tab."
                    },
                    {
                        "id": "C",
                        "text": "In a separate downloaded CSV file."
                    },
                    {
                        "id": "D",
                        "text": "On the prospect's individual record."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Tooltips containing high-level reporting statistics display above each step in your program on the canvas in the Reporting tab."
            },
            {
                "id": "q40",
                "text": "When testing an engagement program, what do you manually select to simulate the prospect's experience?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The exact time of day they receive emails."
                    },
                    {
                        "id": "B",
                        "text": "The dates when prospects join the program and dates they take actions defined by triggers."
                    },
                    {
                        "id": "C",
                        "text": "Which sales rep they are assigned to."
                    },
                    {
                        "id": "D",
                        "text": "Their IP address and location."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- As you test, you select dates when prospects join the program and dates they take actions defined by triggers."
            },
            {
                "id": "q41",
                "text": "You want to notify a user when a prospect reaches a specific point in the engagement program. Which step type should be used for the notification?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Trigger"
                    },
                    {
                        "id": "B",
                        "text": "Rule"
                    },
                    {
                        "id": "C",
                        "text": "Action"
                    },
                    {
                        "id": "D",
                        "text": "End"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Action steps let you do something, like send an email, notify a user, or create a task."
            },
            {
                "id": "q42",
                "text": "Which of the following best describes the function of an Action step?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Listens for an event to occur."
                    },
                    {
                        "id": "B",
                        "text": "Checks for specified criteria or values."
                    },
                    {
                        "id": "C",
                        "text": "Takes an action on a prospect at a given point in time."
                    },
                    {
                        "id": "D",
                        "text": "Permanently stops the prospect from progressing."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Actions take an action on a prospect at a given point in time."
            },
            {
                "id": "q43",
                "text": "How does Engagement Studio handle assets (like emails and lists) during the building phase?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "You must create all assets before you can build the logic."
                    },
                    {
                        "id": "B",
                        "text": "You can build the logic steps first, and add the required assets later before starting the program."
                    },
                    {
                        "id": "C",
                        "text": "Assets are automatically generated by the program."
                    },
                    {
                        "id": "D",
                        "text": "Assets cannot be modified once added to a draft program."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- You can create the steps within your program logic first, and then create the assets that support the logic later before starting the program."
            },
            {
                "id": "q44",
                "text": "What does the \"Activity\" tab in Engagement Studio track?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The individual actions taken by prospects."
                    },
                    {
                        "id": "B",
                        "text": "When changes were made to the program itself."
                    },
                    {
                        "id": "C",
                        "text": "The overall open and click rates of emails."
                    },
                    {
                        "id": "D",
                        "text": "The sales rep follow-up activities."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The Activity tab tracks when changes were made in your program."
            },
            {
                "id": "q45",
                "text": "Which of the following ways can you customize content based on the recipient in Account Engagement? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Variable tags"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic content"
                    },
                    {
                        "id": "C",
                        "text": "Custom redirect paths"
                    },
                    {
                        "id": "D",
                        "text": "Completion actions"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B"
                ],
                "explanation": "- Variable tags and Dynamic content are the two ways to customize content based on the recipient."
            },
            {
                "id": "q46",
                "text": "In stage-based marketing, what is the recommended approach for the 3-2-1 campaign regarding the order of engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Market to cold leads first to build the pipeline."
                    },
                    {
                        "id": "B",
                        "text": "Follow up with hot leads first, then warm leads, leaving cold leads for last."
                    },
                    {
                        "id": "C",
                        "text": "Nurture all leads equally at the same time."
                    },
                    {
                        "id": "D",
                        "text": "Focus entirely on warm leads and ignore cold leads."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The 3-2-1 strategy recommends following up with hot leads first, then warm leads, leaving cold leads for last."
            },
            {
                "id": "q47",
                "text": "You want to remind existing customers that it is time to renew their contracts by triggering a program a month before the renewal date. Which campaign strategy does this describe?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "3-2-1 Campaign"
                    },
                    {
                        "id": "B",
                        "text": "Renewal Campaign"
                    },
                    {
                        "id": "C",
                        "text": "Onboarding Campaign"
                    },
                    {
                        "id": "D",
                        "text": "Warm Lead Nurture"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Renewal nurture programs remind existing customers to renew their contracts by triggering before the renewal date."
            },
            {
                "id": "q48",
                "text": "When setting the time zone for an engagement program, what does it primarily affect?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The timezone displayed on the prospect's record."
                    },
                    {
                        "id": "B",
                        "text": "The business hours and scheduled send dates for the program."
                    },
                    {
                        "id": "C",
                        "text": "The timezone of the Salesforce integration."
                    },
                    {
                        "id": "D",
                        "text": "Nothing, time zones are handled at the account level only."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The time zone setting affects when the business hours start/end and when scheduled emails are sent for that program."
            },
            {
                "id": "q49",
                "text": "You want to branch prospects based on whether their score is above 50. Which step type provides this capability?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Action"
                    },
                    {
                        "id": "B",
                        "text": "Trigger"
                    },
                    {
                        "id": "C",
                        "text": "Rule"
                    },
                    {
                        "id": "D",
                        "text": "Scoring"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Rules check for specified criteria or values in the system, such as checking if a prospect's score is above a certain threshold."
            },
            {
                "id": "q50",
                "text": "If a prospect reaches a Trigger step evaluating an email open, and the prospect opened that specific email before they even entered the engagement program, will they go down the \"yes\" or \"no\" path?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes path, because they opened it at some point."
                    },
                    {
                        "id": "B",
                        "text": "No path, because Engagement Studio logic only looks at actions that occur after the prospect joins the program."
                    },
                    {
                        "id": "C",
                        "text": "It depends on the business hours setting."
                    },
                    {
                        "id": "D",
                        "text": "They will skip the step."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Engagement program logic looks only at the actions, rules, or triggers that occur after the prospect joins the program."
            }
        ]
    },
    {
        "id": "exam_7",
        "title": "Salesforce Exam 1",
        "questions": [
            {
                "id": "q1",
                "text": "A marketer wants to ensure they are adhering to modern browser tracking standards. Which tracking method does Account Engagement use by default to track visitors?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Third-party cookies"
                    },
                    {
                        "id": "B",
                        "text": "First-party cookies"
                    },
                    {
                        "id": "C",
                        "text": "IP tracking only"
                    },
                    {
                        "id": "D",
                        "text": "Server-side tracking"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "First-party cookies. Account Engagement primarily uses first-party cookies for tracking, aligning with modern browser standards as third-party cookies are deprecated."
            },
            {
                "id": "q2",
                "text": "What defines an \"active visitor\" in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A visitor who has submitted a form"
                    },
                    {
                        "id": "B",
                        "text": "A visitor who has visited two or more pages"
                    },
                    {
                        "id": "C",
                        "text": "A visitor who has opened an email"
                    },
                    {
                        "id": "D",
                        "text": "A visitor who has clicked a social link"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "A visitor who has visited two or more pages. This demonstrates active engagement beyond a single bounce."
            },
            {
                "id": "q3",
                "text": "Which of the following actions will convert an anonymous visitor into an identified prospect? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Clicking a link in a tracked email"
                    },
                    {
                        "id": "B",
                        "text": "Submitting an Account Engagement form"
                    },
                    {
                        "id": "C",
                        "text": "Viewing a landing page"
                    },
                    {
                        "id": "D",
                        "text": "Submitting a form handler"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "D"
                ],
                "explanation": "Any action that captures the prospect's email address (form submission, form handler) or identifies them via a unique tracked link click will convert them."
            },
            {
                "id": "q4",
                "text": "Can you view the specific pages a visitor has looked at before they became a prospect?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes, their past tracking data is tied to their prospect record upon conversion"
                    },
                    {
                        "id": "B",
                        "text": "No, tracking starts only after they convert"
                    },
                    {
                        "id": "C",
                        "text": "Only if they are a Salesforce Contact"
                    },
                    {
                        "id": "D",
                        "text": "Only if they have a third-party cookie"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Yes, their past tracking data is tied to their prospect record upon conversion. Anonymous tracking history is retained and merged once identity is established."
            },
            {
                "id": "q5",
                "text": "How does Account Engagement primarily track a prospect's activity across your website?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "By tracking their email address"
                    },
                    {
                        "id": "B",
                        "text": "By monitoring their IP address and tracking cookie"
                    },
                    {
                        "id": "C",
                        "text": "By tracking their MAC address"
                    },
                    {
                        "id": "D",
                        "text": "By using social media pixels"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "By monitoring their IP address and tracking cookie. This combination establishes the tracking session before and after conversion."
            },
            {
                "id": "q6",
                "text": "What is the standard sync interval between Account Engagement and Salesforce?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Every 2 minutes"
                    },
                    {
                        "id": "B",
                        "text": "Every 10 minutes"
                    },
                    {
                        "id": "C",
                        "text": "Every hour"
                    },
                    {
                        "id": "D",
                        "text": "Once a day"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Every 10 minutes. This is the standard background sync interval."
            },
            {
                "id": "q7",
                "text": "Where do deleted prospect records go, and what can cause them to be restored?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Recycle Bin; they are restored if they click a tracked link or submit a form"
                    },
                    {
                        "id": "B",
                        "text": "Archive; they must be restored manually by an Admin"
                    },
                    {
                        "id": "C",
                        "text": "Trash; they are permanently deleted after 30 days"
                    },
                    {
                        "id": "D",
                        "text": "Recycle Bin; they are restored only if a Salesforce user edits their Lead record"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Recycle Bin; they are restored if they click a tracked link or submit a form. Inbound engagement automatically undeletes records."
            },
            {
                "id": "q8",
                "text": "Which of the following are default user roles in Account Engagement? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Administrator"
                    },
                    {
                        "id": "B",
                        "text": "Content Creator"
                    },
                    {
                        "id": "C",
                        "text": "Marketing"
                    },
                    {
                        "id": "D",
                        "text": "Sales Manager"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "C",
                    "D"
                ],
                "explanation": "The four default roles are Administrator, Marketing, Sales Manager, and Sales. (Content Creator is a custom role concept in other platforms)."
            },
            {
                "id": "q9",
                "text": "What field is used as the unique identifier for syncing records between Account Engagement and Salesforce when AMPSEA is enabled?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Email Address"
                    },
                    {
                        "id": "B",
                        "text": "CRM ID"
                    },
                    {
                        "id": "C",
                        "text": "Account ID"
                    },
                    {
                        "id": "D",
                        "text": "Last Name"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "CRM ID. With AMPSEA (Allow Multiple Prospects with the Same Email Address), the Salesforce CRM ID is the unique identifier."
            },
            {
                "id": "q10",
                "text": "When mapping custom fields from Account Engagement to Salesforce, which Salesforce objects can the fields be mapped to?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Lead and Contact only"
                    },
                    {
                        "id": "B",
                        "text": "Lead, Contact, and Account"
                    },
                    {
                        "id": "C",
                        "text": "Account and Opportunity only"
                    },
                    {
                        "id": "D",
                        "text": "Lead only"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Lead and Contact only. Custom fields map to Lead and Contact objects. Account/Opportunity fields are read-only in Account Engagement."
            },
            {
                "id": "q11",
                "text": "Which DNS records must be configured to ensure high deliverability and allow Account Engagement to send emails on your behalf? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "SPF"
                    },
                    {
                        "id": "B",
                        "text": "CNAME"
                    },
                    {
                        "id": "C",
                        "text": "DKIM"
                    },
                    {
                        "id": "D",
                        "text": "MX"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "C"
                ],
                "explanation": "SPF and DKIM are required for email authentication. (CNAME is for tracker domains)."
            },
            {
                "id": "q12",
                "text": "What is required to use B2B Marketing Analytics?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement Plus edition or higher and a Salesforce CRM connection"
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement Growth edition"
                    },
                    {
                        "id": "C",
                        "text": "A third-party BI tool"
                    },
                    {
                        "id": "D",
                        "text": "Einstein Lead Scoring"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Account Engagement Plus edition or higher and a Salesforce CRM connection. B2BMA is an analytics app that requires specific licensing and a CRM connection."
            },
            {
                "id": "q13",
                "text": "A company wants to maintain its existing, complex website forms but wants to send the submission data to Account Engagement. Which tool should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement Form"
                    },
                    {
                        "id": "B",
                        "text": "Form Handler"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "D",
                        "text": "Landing Page"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Form Handler. Form handlers allow you to keep your existing form UI and backend logic while passing a copy of the data to Account Engagement."
            },
            {
                "id": "q14",
                "text": "Which feature allows you to display different form fields to a prospect based on the data you already have for them, helping to gather more information over time?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dependent Fields"
                    },
                    {
                        "id": "B",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "C",
                        "text": "Kiosk Mode"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic Content"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Progressive Profiling. This feature dynamically hides fields you already have data for and displays new ones to build a profile over time."
            },
            {
                "id": "q15",
                "text": "A marketer wants a form field for 'State' to only appear if the prospect selects 'United States' for the 'Country' field. Which feature accomplishes this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "B",
                        "text": "Dependent Fields"
                    },
                    {
                        "id": "C",
                        "text": "Form Handlers"
                    },
                    {
                        "id": "D",
                        "text": "JavaScript validation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Dependent Fields. Dependent fields appear based on the value selected in a controlling field."
            },
            {
                "id": "q16",
                "text": "What is the purpose of Kiosk Mode on an Account Engagement form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It displays the form in full-screen mode"
                    },
                    {
                        "id": "B",
                        "text": "It prevents the form from dropping a tracking cookie to avoid linking multiple submissions to the same prospect"
                    },
                    {
                        "id": "C",
                        "text": "It allows offline submissions"
                    },
                    {
                        "id": "D",
                        "text": "It hides the submit button"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "It prevents the form from dropping a tracking cookie. Essential for events or iPads where multiple people submit the same form."
            },
            {
                "id": "q17",
                "text": "Which of the following elements are required to create a Landing Page in Account Engagement? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "A layout template"
                    },
                    {
                        "id": "B",
                        "text": "A custom domain"
                    },
                    {
                        "id": "C",
                        "text": "A form or form handler"
                    },
                    {
                        "id": "D",
                        "text": "A campaign"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "D"
                ],
                "explanation": "A layout template is needed for design, and a campaign is required for tracking."
            },
            {
                "id": "q18",
                "text": "How can you test two different versions of a landing page to see which one converts better?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A/B Testing on List Emails"
                    },
                    {
                        "id": "B",
                        "text": "Multivariate Testing"
                    },
                    {
                        "id": "C",
                        "text": "Engagement Studio"
                    },
                    {
                        "id": "D",
                        "text": "Automation Rules"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Multivariate Testing. Account Engagement offers multivariate testing for landing pages to test different elements."
            },
            {
                "id": "q19",
                "text": "Which native feature helps protect your Account Engagement forms from bot submissions and spam?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Honeypot fields"
                    },
                    {
                        "id": "B",
                        "text": "CAPTCHA / reCAPTCHA"
                    },
                    {
                        "id": "C",
                        "text": "Email verification"
                    },
                    {
                        "id": "D",
                        "text": "Double opt-in"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "CAPTCHA / reCAPTCHA. Built-in integration helps block bot spam."
            },
            {
                "id": "q20",
                "text": "What happens if a prospect submits a form that is embedded on an Account Engagement landing page?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The landing page view and form submission are tracked as a single activity"
                    },
                    {
                        "id": "B",
                        "text": "The landing page view and form submission are tracked as separate activities"
                    },
                    {
                        "id": "C",
                        "text": "Only the form submission is tracked"
                    },
                    {
                        "id": "D",
                        "text": "Only the landing page view is tracked"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "The landing page view and form submission are tracked as a single activity. To prevent redundant tracking, they are grouped."
            },
            {
                "id": "q21",
                "text": "A marketer wants to add prospects to a specific Salesforce campaign when they submit a form. How can this be achieved natively?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Using a Segmentation Rule"
                    },
                    {
                        "id": "B",
                        "text": "Using a Completion Action on the form"
                    },
                    {
                        "id": "C",
                        "text": "Using a Page Action"
                    },
                    {
                        "id": "D",
                        "text": "Using a Dynamic List"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Using a Completion Action on the form. Completion actions trigger immediately upon form submission."
            },
            {
                "id": "q22",
                "text": "If a form is hosted on a secure (HTTPS) external webpage, what must be true about the Account Engagement Form Handler URL?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It must use HTTP"
                    },
                    {
                        "id": "B",
                        "text": "It must use HTTPS"
                    },
                    {
                        "id": "C",
                        "text": "It must be an iframe"
                    },
                    {
                        "id": "D",
                        "text": "It doesn't matter"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "It must use HTTPS. Form Handlers must match the security protocol of the page hosting them."
            },
            {
                "id": "q23",
                "text": "Which metric in form reporting shows the number of times a form was rendered on a page?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Unique Views"
                    },
                    {
                        "id": "B",
                        "text": "Total Views"
                    },
                    {
                        "id": "C",
                        "text": "Conversions"
                    },
                    {
                        "id": "D",
                        "text": "Submissions"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Total Views. This counts every time the form loaded, regardless of unique visitors."
            },
            {
                "id": "q24",
                "text": "Can you use custom CSS to style an Account Engagement Form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes, by adding it to the layout template"
                    },
                    {
                        "id": "B",
                        "text": "No, forms cannot be styled"
                    },
                    {
                        "id": "C",
                        "text": "Only if the form is embedded in Salesforce"
                    },
                    {
                        "id": "D",
                        "text": "Yes, but only for Form Handlers"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Yes, by adding it to the layout template. The layout template controls structural HTML and CSS."
            },
            {
                "id": "q25",
                "text": "What is the difference between a prospect's Score and their Grade?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Score measures implicit interest (behavior); Grade measures explicit fit (demographics)"
                    },
                    {
                        "id": "B",
                        "text": "Score measures explicit fit; Grade measures implicit interest"
                    },
                    {
                        "id": "C",
                        "text": "They are identical metrics"
                    },
                    {
                        "id": "D",
                        "text": "Score is used for Leads; Grade is used for Contacts"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Score measures implicit interest (behavior); Grade measures explicit fit (demographics). Score is numeric (clicks, views); Grade is a letter (A-F based on profile)."
            },
            {
                "id": "q26",
                "text": "Which automation tool allows you to perform continuous, repeatable actions based on specific prospect criteria?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Segmentation Rules"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rules"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic Lists"
                    },
                    {
                        "id": "D",
                        "text": "Completion Actions"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Automation Rules. They run continuously and perform actions on prospects that meet the criteria."
            },
            {
                "id": "q27",
                "text": "What is the primary characteristic of a Dynamic List?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It is a static list used for a one-time email send"
                    },
                    {
                        "id": "B",
                        "text": "It automatically adds and removes prospects continuously based on defined criteria"
                    },
                    {
                        "id": "C",
                        "text": "It is manually updated by sales users"
                    },
                    {
                        "id": "D",
                        "text": "It syncs directly with Salesforce campaigns without criteria"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "It automatically adds and removes prospects continuously based on defined criteria."
            },
            {
                "id": "q28",
                "text": "Which of the following tools runs only once and does NOT continuously update?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Automation Rules"
                    },
                    {
                        "id": "B",
                        "text": "Segmentation Rules"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic Lists"
                    },
                    {
                        "id": "D",
                        "text": "Engagement Studio"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Segmentation Rules. They run once retroactively to create a static list."
            },
            {
                "id": "q29",
                "text": "A marketer wants to notify the assigned sales rep every time a prospect views the company's pricing page. Which feature should be used?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Page Action"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "C",
                        "text": "Custom Redirect"
                    },
                    {
                        "id": "D",
                        "text": "Profile"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Page Action. Page actions trigger completion actions when specific high-value pages are viewed."
            },
            {
                "id": "q30",
                "text": "What is Einstein Behavior Scoring?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A rule-based scoring system configured manually"
                    },
                    {
                        "id": "B",
                        "text": "An AI tool that determines which prospects are most likely to convert based on their engagement history"
                    },
                    {
                        "id": "C",
                        "text": "A tool to grade prospects based on job title"
                    },
                    {
                        "id": "D",
                        "text": "A dashboard for email metrics"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "An AI tool that determines which prospects are most likely to convert. It uses machine learning models in Salesforce."
            },
            {
                "id": "q31",
                "text": "How can you decrease a prospect's score if they haven't engaged with any marketing materials in 6 months?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use an Automation Rule to apply score decay"
                    },
                    {
                        "id": "B",
                        "text": "It happens automatically by default"
                    },
                    {
                        "id": "C",
                        "text": "Use a Segmentation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Use a Completion Action"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Use an Automation Rule to apply score decay. You can configure a rule to subtract points if \"Prospect time last active\" is greater than X days."
            },
            {
                "id": "q32",
                "text": "What triggers a Completion Action?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A prospect meeting a demographic criteria"
                    },
                    {
                        "id": "B",
                        "text": "A time-based delay"
                    },
                    {
                        "id": "C",
                        "text": "A prospect taking a specific action (e.g., submitting a form, clicking a link)"
                    },
                    {
                        "id": "D",
                        "text": "A manual trigger by an Admin"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "A prospect taking a specific action. Completion actions are triggered by explicit, inbound prospect actions."
            },
            {
                "id": "q33",
                "text": "Can Completion Actions be applied retroactively?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Yes, they can be run on past data"
                    },
                    {
                        "id": "B",
                        "text": "No, they only trigger at the moment the action occurs"
                    },
                    {
                        "id": "C",
                        "text": "Only for form submissions"
                    },
                    {
                        "id": "D",
                        "text": "Only for email clicks"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "No, they only trigger at the moment the action occurs. They cannot look backward."
            },
            {
                "id": "q34",
                "text": "A company wants to track clicks on a banner ad hosted on a third-party website and add those prospects to a list. Which feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Page Action"
                    },
                    {
                        "id": "B",
                        "text": "Custom Redirect"
                    },
                    {
                        "id": "C",
                        "text": "Form Handler"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic Link"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Custom Redirect. Custom redirects track clicks on links hosted outside of Account Engagement (like banner ads)."
            },
            {
                "id": "q35",
                "text": "How are Profiles used in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To assign scores based on behavior"
                    },
                    {
                        "id": "B",
                        "text": "To grade prospects based on their ideal customer profile criteria"
                    },
                    {
                        "id": "C",
                        "text": "To manage user permissions"
                    },
                    {
                        "id": "D",
                        "text": "To segment emails"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "To grade prospects based on their ideal customer profile criteria. Profiles define the criteria for Grading."
            },
            {
                "id": "q36",
                "text": "If multiple prospects have the same email address (AMPSEA is enabled), how does Account Engagement determine which record to sync with Salesforce?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It syncs the oldest record"
                    },
                    {
                        "id": "B",
                        "text": "It uses the CRM ID to sync the correct matching record"
                    },
                    {
                        "id": "C",
                        "text": "It merges them"
                    },
                    {
                        "id": "D",
                        "text": "It blocks the sync"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "It uses the CRM ID to sync the correct matching record."
            },
            {
                "id": "q37",
                "text": "Which tool allows for complex, multi-step nurturing paths with branching logic?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Engagement Studio"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rules"
                    },
                    {
                        "id": "C",
                        "text": "Segmentation Rules"
                    },
                    {
                        "id": "D",
                        "text": "Completion Actions"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Engagement Studio. The visual canvas for complex logic and nurturing."
            },
            {
                "id": "q38",
                "text": "When assigning a prospect to a user via an automation rule, what happens if the prospect already has an assigned owner in Salesforce?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The Account Engagement owner overwrites the Salesforce owner"
                    },
                    {
                        "id": "B",
                        "text": "The assignment is ignored, and the Salesforce owner remains"
                    },
                    {
                        "id": "C",
                        "text": "A duplicate record is created"
                    },
                    {
                        "id": "D",
                        "text": "The prospect is sent to the Recycle Bin"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The assignment is ignored, and the Salesforce owner remains. Account Engagement will not overwrite an existing Salesforce owner via assignment actions."
            },
            {
                "id": "q39",
                "text": "What is the difference between an Email Template and a List Email?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A List Email is a reusable layout; an Email Template is a one-time send"
                    },
                    {
                        "id": "B",
                        "text": "An Email Template is a reusable layout; a List Email is a one-time send to a defined list"
                    },
                    {
                        "id": "C",
                        "text": "They are the exact same thing"
                    },
                    {
                        "id": "D",
                        "text": "Email templates can only be used in Engagement Studio"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "An Email Template is a reusable layout; a List Email is a one-time send."
            },
            {
                "id": "q40",
                "text": "How can you personalize an email to include the prospect's First Name, falling back to \"Valued Customer\" if the first name is blank?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Using Dynamic Content"
                    },
                    {
                        "id": "B",
                        "text": "Using HML (Handlebars Merge Language) merge fields with a default value"
                    },
                    {
                        "id": "C",
                        "text": "Using an Automation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Using JavaScript"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Using HML (Handlebars Merge Language) merge fields with a default value. E.g., {{Recipient.FirstName | Default:\"Valued Customer\"}}."
            },
            {
                "id": "q41",
                "text": "Which of the following elements can be A/B tested in an Account Engagement List Email? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Subject Line"
                    },
                    {
                        "id": "B",
                        "text": "Sender Name"
                    },
                    {
                        "id": "C",
                        "text": "Email Content/Design"
                    },
                    {
                        "id": "D",
                        "text": "Sending Domain"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "C"
                ],
                "explanation": "You can test subject lines, sender names, and the email content itself."
            },
            {
                "id": "q42",
                "text": "What is the purpose of an Email Preference Center?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To track email open rates"
                    },
                    {
                        "id": "B",
                        "text": "To allow prospects to choose which specific lists they want to be subscribed to, reducing global opt-outs"
                    },
                    {
                        "id": "C",
                        "text": "To automatically clean bounced emails"
                    },
                    {
                        "id": "D",
                        "text": "To segment dynamic content"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "To allow prospects to choose which specific lists they want to be subscribed to. This helps prevent global unsubscribes."
            },
            {
                "id": "q43",
                "text": "What does a \"Hard Bounce\" indicate?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The recipient's mailbox is temporarily full"
                    },
                    {
                        "id": "B",
                        "text": "The email address is permanently invalid or does not exist"
                    },
                    {
                        "id": "C",
                        "text": "The recipient marked the email as spam"
                    },
                    {
                        "id": "D",
                        "text": "The email was delayed by the server"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The email address is permanently invalid or does not exist."
            },
            {
                "id": "q44",
                "text": "How does Account Engagement track an email open?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "By tracking the IP address"
                    },
                    {
                        "id": "B",
                        "text": "By embedding a 1x1 invisible tracking pixel in the HTML version of the email"
                    },
                    {
                        "id": "C",
                        "text": "By monitoring the recipient's mail server"
                    },
                    {
                        "id": "D",
                        "text": "By requiring read receipts"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "By embedding a 1x1 invisible tracking pixel. The open is recorded when images are downloaded."
            },
            {
                "id": "q45",
                "text": "What feature would you use to display a specific promotional banner in an email only to prospects whose Industry is \"Healthcare\"?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Automation Rules"
                    },
                    {
                        "id": "B",
                        "text": "HML"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "D",
                        "text": "Snippets"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Dynamic Content. It alters the HTML content displayed based on prospect field data."
            },
            {
                "id": "q46",
                "text": "What is the maximum recommended file size for an image uploaded to Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "1 MB"
                    },
                    {
                        "id": "B",
                        "text": "50 MB"
                    },
                    {
                        "id": "C",
                        "text": "100 MB"
                    },
                    {
                        "id": "D",
                        "text": "Unlimited"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "50 MB. (Though best practice is much smaller for email)."
            },
            {
                "id": "q47",
                "text": "Which integration allows you to preview how your email will render across different email clients and devices before sending?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Litmus (Advanced Email Analytics)"
                    },
                    {
                        "id": "B",
                        "text": "Twilio"
                    },
                    {
                        "id": "C",
                        "text": "Google Analytics"
                    },
                    {
                        "id": "D",
                        "text": "Einstein"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Litmus (Advanced Email Analytics). Built into the platform for rendering previews."
            },
            {
                "id": "q48",
                "text": "What type of email ignores prospect opt-out status and is used for critical notifications (e.g., billing updates)?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "List Email"
                    },
                    {
                        "id": "B",
                        "text": "Autoresponder"
                    },
                    {
                        "id": "C",
                        "text": "Operational Email"
                    },
                    {
                        "id": "D",
                        "text": "Engagement Email"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Operational Email. Used for non-marketing, critical communications and bypasses opt-outs."
            },
            {
                "id": "q49",
                "text": "If a prospect clicks the 'Unsubscribe' link in an email, what happens?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are deleted from Account Engagement"
                    },
                    {
                        "id": "B",
                        "text": "They are marked as 'Do Not Email' globally"
                    },
                    {
                        "id": "C",
                        "text": "They are removed from the specific list only"
                    },
                    {
                        "id": "D",
                        "text": "Their score is reset to zero"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "They are marked as 'Do Not Email' globally. They will no longer receive marketing emails."
            },
            {
                "id": "q50",
                "text": "Which report shows how prospects read your email (e.g., glimced, skimmed, read)?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "List Email Report"
                    },
                    {
                        "id": "B",
                        "text": "Advanced Email Analytics Report"
                    },
                    {
                        "id": "C",
                        "text": "Engagement Report"
                    },
                    {
                        "id": "D",
                        "text": "Bounce Report"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Advanced Email Analytics Report. Shows read, skimmed, and glimced metrics."
            },
            {
                "id": "q51",
                "text": "What are the three primary node types available in an Engagement Studio program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Actions, Triggers, Rules"
                    },
                    {
                        "id": "B",
                        "text": "Lists, Emails, Forms"
                    },
                    {
                        "id": "C",
                        "text": "Starts, Stops, Pauses"
                    },
                    {
                        "id": "D",
                        "text": "Segments, Completions, Automations"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Actions, Triggers, Rules. Actions do something, Triggers listen for behavior, Rules check data."
            },
            {
                "id": "q52",
                "text": "In Engagement Studio, what is the function of a 'Trigger' node?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To take an action like sending an email"
                    },
                    {
                        "id": "B",
                        "text": "To evaluate a condition based on prospect data"
                    },
                    {
                        "id": "C",
                        "text": "To listen for a specific event or prospect action (e.g., email open) within a specific timeframe"
                    },
                    {
                        "id": "D",
                        "text": "To pause the program"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "To listen for a specific event or prospect action within a specific timeframe."
            },
            {
                "id": "q53",
                "text": "What is the critical difference between \"Wait up to [X] days\" and \"Wait [X] days\" on a trigger node?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are identical"
                    },
                    {
                        "id": "B",
                        "text": "\"Wait up to\" moves the prospect forward immediately if the action occurs; \"Wait\" holds the prospect for the full exact timeframe regardless of when they take the action"
                    },
                    {
                        "id": "C",
                        "text": "\"Wait\" is used for rules; \"Wait up to\" is used for actions"
                    },
                    {
                        "id": "D",
                        "text": "\"Wait up to\" requires manual approval"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "\"Wait up to\" moves the prospect forward immediately if the action occurs; \"Wait\" holds the prospect for the full exact timeframe."
            },
            {
                "id": "q54",
                "text": "What happens to prospects if they are added to a Suppression List that is applied to an active Engagement Studio program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are permanently removed from the program"
                    },
                    {
                        "id": "B",
                        "text": "They are paused; if they are later removed from the suppression list, they will resume exactly where they left off"
                    },
                    {
                        "id": "C",
                        "text": "They skip the current step and move to the next one"
                    },
                    {
                        "id": "D",
                        "text": "They receive an operational email"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "They are paused; if they are later removed from the suppression list, they will resume exactly where they left off."
            },
            {
                "id": "q55",
                "text": "How can you verify the logic and paths of an Engagement Studio program before starting it?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Send it to a test list of internal users"
                    },
                    {
                        "id": "B",
                        "text": "Use the native Test tab feature to simulate prospect paths"
                    },
                    {
                        "id": "C",
                        "text": "Activate it for 1 hour and monitor"
                    },
                    {
                        "id": "D",
                        "text": "You cannot test it before starting"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Use the native Test tab feature to simulate prospect paths."
            },
            {
                "id": "q56",
                "text": "Can a prospect run through the exact same Engagement Studio program more than once?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "No, never"
                    },
                    {
                        "id": "B",
                        "text": "Yes, if the \"Allow prospects to enter program more than once\" setting is enabled"
                    },
                    {
                        "id": "C",
                        "text": "Yes, it happens automatically after 30 days"
                    },
                    {
                        "id": "D",
                        "text": "Only if they are manually re-added by an Admin"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Yes, if the \"Allow prospects to enter program more than once\" setting is enabled."
            },
            {
                "id": "q57",
                "text": "If you pause an active Engagement Studio program to make edits, what happens to the prospects currently in the program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They start over from the beginning"
                    },
                    {
                        "id": "B",
                        "text": "They are removed from the program"
                    },
                    {
                        "id": "C",
                        "text": "They remain exactly where they were and will resume from that point when the program is restarted"
                    },
                    {
                        "id": "D",
                        "text": "They are automatically sent the next email"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "They remain exactly where they were and will resume from that point."
            },
            {
                "id": "q58",
                "text": "What does a 'Rule' node do in Engagement Studio?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Listens for an email click"
                    },
                    {
                        "id": "B",
                        "text": "Evaluates a condition based on prospect data (e.g., Score > 50, Grade is A)"
                    },
                    {
                        "id": "C",
                        "text": "Sends a notification to sales"
                    },
                    {
                        "id": "D",
                        "text": "Adds a prospect to a Salesforce campaign"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Evaluates a condition based on prospect data. Rules look at static data (fields, lists, grades)."
            },
            {
                "id": "q59",
                "text": "Which setting ensures that Engagement Studio emails are only sent to prospects between Monday and Friday, 9 AM to 5 PM?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Automation Rules"
                    },
                    {
                        "id": "B",
                        "text": "\"Send during business hours\" program setting"
                    },
                    {
                        "id": "C",
                        "text": "Trigger nodes"
                    },
                    {
                        "id": "D",
                        "text": "Page Actions"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "\"Send during business hours\" program setting."
            },
            {
                "id": "q60",
                "text": "A marketer wants to check if a prospect has opened ANY email in the last 30 days within an Engagement program. Which node should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Trigger Node"
                    },
                    {
                        "id": "B",
                        "text": "Action Node"
                    },
                    {
                        "id": "C",
                        "text": "Rule Node"
                    },
                    {
                        "id": "D",
                        "text": "Wait Node"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Rule Node. You can use a Rule node to check \"Prospect has opened any email\" in the last X days."
            }
        ]
    },
    {
        "id": "exam_8",
        "title": "Salesforce Exam 2",
        "questions": [
            {
                "id": "q1",
                "text": "A marketing manager wants to identify which anonymous visitors on their pricing page are from specific companies to prioritize account-based marketing efforts. What Account Engagement feature should they utilize?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Engagement History Dashboard"
                    },
                    {
                        "id": "B",
                        "text": "Visitor Filters"
                    },
                    {
                        "id": "C",
                        "text": "Identify-based Tracking"
                    },
                    {
                        "id": "D",
                        "text": "Visitor Reports"
                    },
                    {
                        "id": "E",
                        "text": "Page Actions"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Identify-based Tracking Explanation: Account Engagement uses a combination of techniques, but to identify anonymous visitors from specific companies (often before they fill out a form), it relies on IP lookup (Identify-based tracking or Visitor tracking) to match IP addresses with known company domains."
            },
            {
                "id": "q2",
                "text": "An organization recently updated their cookie consent policy. A visitor navigates to their website but does not interact with the cookie consent banner. How does Account Engagement track this visitor?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The visitor is tracked but not associated with an IP address."
                    },
                    {
                        "id": "B",
                        "text": "The visitor's page views are not tracked until consent is explicitly given."
                    },
                    {
                        "id": "C",
                        "text": "The visitor is tracked anonymously using a tracking cookie."
                    },
                    {
                        "id": "D",
                        "text": "The visitor is cookied, but page views are not recorded in the database."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The visitor's page views are not tracked until consent is explicitly given. Explanation: When tracking opt-in preferences are enabled in Account Engagement, visitors must explicitly click the opt-in button on the banner for their page views and activities to be tracked and associated with a cookie. If they ignore it, they are not tracked."
            },
            {
                "id": "q3",
                "text": "You notice a high number of visitors from your own company's internal IP addresses inflating the page view metrics. How can you ensure these visits are excluded from your Account Engagement reports?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create an automation rule to delete prospects with internal IP addresses."
                    },
                    {
                        "id": "B",
                        "text": "Set up a Visitor Filter using the internal IP range."
                    },
                    {
                        "id": "C",
                        "text": "Use a segmentation rule to remove internal visitors."
                    },
                    {
                        "id": "D",
                        "text": "Configure a dynamic list to exclude the company's domain."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Set up a Visitor Filter using the internal IP range. Explanation: Visitor Filters in Account Engagement allow you to exclude specific IP addresses or IP ranges from your reporting and tracking, which is the standard way to exclude internal employee traffic."
            },
            {
                "id": "q4",
                "text": "A marketing team is evaluating prospect engagement. They want to know the exact moment an anonymous visitor provided their email address and became a known prospect. Which action typically triggers this conversion?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Clicking a link in a tracked email."
                    },
                    {
                        "id": "B",
                        "text": "Viewing a landing page."
                    },
                    {
                        "id": "C",
                        "text": "Submitting a form or form handler."
                    },
                    {
                        "id": "D",
                        "text": "Opening a promotional email."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Submitting a form or form handler. Explanation: A visitor becomes a known prospect when they provide an email address, most commonly by submitting an Account Engagement form or form handler."
            },
            {
                "id": "q5",
                "text": "A new prospect was created in Account Engagement after clicking a link in an email forwarded to them by a colleague. What is the potential issue with this scenario?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect will be assigned the wrong IP address."
                    },
                    {
                        "id": "B",
                        "text": "The prospect's tracking cookie will be associated with the colleague's record, merging their activity history."
                    },
                    {
                        "id": "C",
                        "text": "The prospect will not receive any further emails."
                    },
                    {
                        "id": "D",
                        "text": "The email link will expire upon the first click."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The prospect's tracking cookie will be associated with the colleague's record, merging their activity history. Explanation: Forwarded emails contain tracked links specific to the original recipient. If a colleague clicks the link, Account Engagement cookies their browser with the original recipient's tracking ID, potentially merging their activities into the original prospect's record."
            },
            {
                "id": "q6",
                "text": "The Salesforce Administrator has added a new custom field on the Lead object called \"Industry Vertical\". The marketing team wants to use this field in Account Engagement for segmentation. What are the necessary steps to map this field?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create the custom field in Account Engagement, select the Salesforce field name from the dropdown, and specify the sync behavior."
                    },
                    {
                        "id": "B",
                        "text": "Create the custom field in Account Engagement, and it will automatically map if the names match exactly."
                    },
                    {
                        "id": "C",
                        "text": "Map the field in Salesforce via the Pardot Connector settings."
                    },
                    {
                        "id": "D",
                        "text": "Use a dynamic list to pull the field data from Salesforce into Account Engagement."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Create the custom field in Account Engagement, select the Salesforce field name from the dropdown, and specify the sync behavior. Explanation: To map a custom field, it must exist in both systems. You create the field in Account Engagement, map it to the corresponding Salesforce field using the dropdown list, and define which system is the master (sync behavior)."
            },
            {
                "id": "q7",
                "text": "A user accidentally deleted a list of prospects that were scheduled to receive an email campaign tomorrow. What is the most efficient way to recover this list?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Re-import the prospects using a CSV file."
                    },
                    {
                        "id": "B",
                        "text": "Create a new list and use an automation rule to populate it."
                    },
                    {
                        "id": "C",
                        "text": "Restore the list from the Account Engagement Recycle Bin."
                    },
                    {
                        "id": "D",
                        "text": "Ask Salesforce support to recover the data from a backup."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Restore the list from the Account Engagement Recycle Bin. Explanation: Most deleted assets in Account Engagement, including lists, are moved to the Recycle Bin and can be easily undeleted/restored without losing data."
            },
            {
                "id": "q8",
                "text": "A marketing user needs to view the Engagement History Dashboard on a Salesforce Campaign record, but they cannot see the component. What should the Salesforce Administrator check first?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Ensure the user is assigned the B2BMA Canvas permission set."
                    },
                    {
                        "id": "B",
                        "text": "Check if the user has the 'Marketing User' checkbox checked on their profile."
                    },
                    {
                        "id": "C",
                        "text": "Verify that the user has the 'Account Engagement User' permission set assigned."
                    },
                    {
                        "id": "D",
                        "text": "Ensure B2B Marketing Analytics is fully provisioned."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Ensure the user is assigned the B2BMA Canvas permission set. Explanation: To view Engagement History Dashboards (which are powered by CRM Analytics) on Salesforce records, users need the appropriate permission set, typically B2BMA Canvas or Analytics View Only User."
            },
            {
                "id": "q9",
                "text": "You are configuring the Salesforce-Account Engagement connector. The sales team wants to ensure that whenever a lead is updated in Salesforce, the changes overwrite any conflicting data in Account Engagement. How should the field sync behavior be configured for mapped custom fields?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use Account Engagement's value."
                    },
                    {
                        "id": "B",
                        "text": "Use Salesforce's value."
                    },
                    {
                        "id": "C",
                        "text": "Use the most recently updated record."
                    },
                    {
                        "id": "D",
                        "text": "Create a custom flow in Salesforce to force the sync."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Use Salesforce's value. Explanation: To ensure Salesforce overwrites any conflicting data in Account Engagement, the sync behavior for the mapped field must be set to 'Use Salesforce's value'."
            },
            {
                "id": "q10",
                "text": "A company is setting up a new Account Engagement business unit for their EMEA region. They want to ensure that leads generated in EMEA only sync to the EMEA business unit. What is the recommended approach?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use an automation rule in Account Engagement to delete non-EMEA leads."
                    },
                    {
                        "id": "B",
                        "text": "Set up Marketing Data Sharing rules in Salesforce based on a region field."
                    },
                    {
                        "id": "C",
                        "text": "Create a separate Salesforce org for the EMEA region."
                    },
                    {
                        "id": "D",
                        "text": "Manually import EMEA leads into the specific business unit."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Set up Marketing Data Sharing rules in Salesforce based on a region field. Explanation: Marketing Data Sharing rules allow you to specify criteria (like a Region field) in Salesforce to control exactly which records sync to which Account Engagement Business Unit."
            },
            {
                "id": "q11",
                "text": "An administrator is reviewing the sync queue and notices several prospects have a sync error stating \"Custom Field 'Region' has restricted picklist values\". How can this be resolved?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Delete the field in Account Engagement and recreate it."
                    },
                    {
                        "id": "B",
                        "text": "Change the sync behavior to 'Use Account Engagement's value'."
                    },
                    {
                        "id": "C",
                        "text": "Ensure the picklist values in Account Engagement exactly match the restricted picklist values in Salesforce."
                    },
                    {
                        "id": "D",
                        "text": "Unmap the field, wait 24 hours, and remap it."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Ensure the picklist values in Account Engagement exactly match the restricted picklist values in Salesforce. Explanation: If a Salesforce field is a restricted picklist, the corresponding Account Engagement field must have the exact same values defined, otherwise the sync will fail when Account Engagement tries to push an invalid value."
            },
            {
                "id": "q12",
                "text": "A marketing team wants to track exactly when a prospect's score reaches 100 and notify the assigned sales rep. Which feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Completion Action on a Form"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic List"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Automation Rule Explanation: Automation Rules evaluate continuously and can trigger actions based on criteria, such as a prospect's score being exactly 100 or greater than 100, and then apply the action to notify a user."
            },
            {
                "id": "q13",
                "text": "A company wants to host a form on their own website and maintain their existing CSS styling, but they want the submission data to flow directly into Account Engagement. What should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement Form with a layout template"
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement Form Handler"
                    },
                    {
                        "id": "C",
                        "text": "Web-to-Lead form mapped to Account Engagement"
                    },
                    {
                        "id": "D",
                        "text": "A custom API integration"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Account Engagement Form Handler Explanation: Form Handlers allow you to use your own external forms (keeping existing CSS and structure) while posting the submission data directly to Account Engagement."
            },
            {
                "id": "q14",
                "text": "You have created an Account Engagement form. You want to ask prospects for their 'Job Title', but only if they have already provided their 'Company Name' in a previous form submission. Which feature enables this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dependent Fields"
                    },
                    {
                        "id": "B",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "C",
                        "text": "Conditional Logic"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic Content"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Progressive Profiling Explanation: Progressive Profiling allows you to conditionally show fields on a form based on whether the prospect has already provided data for other fields, keeping forms short while gradually building a complete profile."
            },
            {
                "id": "q15",
                "text": "A marketing manager wants to redirect prospects to a specific 'Thank You' page based on the 'Country' they select on an Account Engagement form. How can this be achieved?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use dynamic content on the 'Thank You' page."
                    },
                    {
                        "id": "B",
                        "text": "Set up a Completion Action to redirect based on the 'Country' field."
                    },
                    {
                        "id": "C",
                        "text": "Use an Automation Rule to send them an email with the correct link."
                    },
                    {
                        "id": "D",
                        "text": "Configure form field 'Dependent Fields' to show the redirect URL."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Set up a Completion Action to redirect based on the 'Country' field. Explanation: Account Engagement forms allow conditional completion actions. You can specify \"If Country equals X, redirect to URL Y\"."
            },
            {
                "id": "q16",
                "text": "A landing page in Account Engagement shows a high number of views but a very low number of form submissions. Which report should you check to understand where visitors are dropping off?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Form Handler Report"
                    },
                    {
                        "id": "B",
                        "text": "Form Report (specifically analyzing the views vs. submissions and errors)"
                    },
                    {
                        "id": "C",
                        "text": "Landing Page Report"
                    },
                    {
                        "id": "D",
                        "text": "Campaigns Report"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Form Report (specifically analyzing the views vs. submissions and errors) Explanation: The Form Report will show total views, unique views, submissions, and errors. High views but low submissions with high errors could indicate validation issues preventing conversion."
            },
            {
                "id": "q17",
                "text": "You are building a landing page using the drag-and-drop builder. You want to include a section that only shows to prospects who have a score greater than 50. What feature should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "B",
                        "text": "Snippets"
                    },
                    {
                        "id": "C",
                        "text": "Conditional Formatting"
                    },
                    {
                        "id": "D",
                        "text": "Personalization Strings"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Dynamic Content Explanation: Dynamic Content allows you to display different HTML, text, or images on landing pages, forms, or emails based on prospect criteria, such as their score."
            },
            {
                "id": "q18",
                "text": "A form handler is receiving spam submissions. The marketing team wants to implement a mechanism to block these without altering their website's code significantly. What is a recommended approach within Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Add a reCAPTCHA integration directly to the form handler settings."
                    },
                    {
                        "id": "B",
                        "text": "Use an automation rule to delete prospects with fake-looking email addresses."
                    },
                    {
                        "id": "C",
                        "text": "Implement a honeypot field on the external form and map it to the form handler."
                    },
                    {
                        "id": "D",
                        "text": "Set up a segmentation rule to identify spam."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Implement a honeypot field on the external form and map it to the form handler. Explanation: Account Engagement forms have built-in bot protection, but for form handlers, it's a best practice to implement a \"honeypot\" field (a hidden field bots will fill out but humans won't) on your external form to catch spam before it hits Account Engagement."
            },
            {
                "id": "q19",
                "text": "When reviewing a Landing Page Report, what does the 'Unique Submissions' metric indicate?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The total number of times the form on the landing page was submitted."
                    },
                    {
                        "id": "B",
                        "text": "The number of individual prospects who submitted the form on the landing page."
                    },
                    {
                        "id": "C",
                        "text": "The number of new prospects created from the landing page."
                    },
                    {
                        "id": "D",
                        "text": "The number of times the landing page was viewed by unique visitors."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The number of individual prospects who submitted the form on the landing page. Explanation: Unique Submissions count the number of unique cookied visitors/prospects who successfully submitted the form on the landing page."
            },
            {
                "id": "q20",
                "text": "You want to trigger a task for the assigned user whenever a prospect submits a specific form. Where is the most appropriate place to configure this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Form Handler Settings"
                    },
                    {
                        "id": "B",
                        "text": "Form Completion Actions"
                    },
                    {
                        "id": "C",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Engagement Studio Program"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Form Completion Actions Explanation: Completion actions on a form execute immediately upon successful submission, making them the best place to trigger a task for the assigned user."
            },
            {
                "id": "q21",
                "text": "A marketing team wants to test two different variations of a form (different button colors) to see which one converts better. How can they achieve this using Account Engagement forms?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create two forms and embed both on the landing page."
                    },
                    {
                        "id": "B",
                        "text": "Use Multivariate Testing on the landing page hosting the form."
                    },
                    {
                        "id": "C",
                        "text": "Use Dynamic Content within the form to change the button color based on prospect data."
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement forms do not support testing; a form handler must be used."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Use Multivariate Testing on the landing page hosting the form. Explanation: Multivariate testing in Account Engagement allows you to test different variations of a landing page (which can include different forms or different styling of the same form) to see which yields a higher conversion rate."
            },
            {
                "id": "q22",
                "text": "You need to capture file uploads (e.g., resumes) from visitors. Which tool should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement Form"
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement Form Handler"
                    },
                    {
                        "id": "C",
                        "text": "Either A or B"
                    },
                    {
                        "id": "D",
                        "text": "Neither A nor B; file uploads are not supported."
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "Neither A nor B; file uploads are not supported. Explanation: Neither Account Engagement forms nor form handlers natively support file upload fields. A third-party solution or custom integration is required for this use case."
            },
            {
                "id": "q23",
                "text": "A form handler is set up, but submissions are not creating prospects in Account Engagement. The external form is submitting to the Endpoint URL. What is a common reason for this failure?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The 'Email' field is not mapped correctly or is missing from the external form post."
                    },
                    {
                        "id": "B",
                        "text": "The form handler is in 'Draft' status."
                    },
                    {
                        "id": "C",
                        "text": "The website is not using HTTPS."
                    },
                    {
                        "id": "D",
                        "text": "The prospect already exists in Salesforce."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "The 'Email' field is not mapped correctly or is missing from the external form post. Explanation: The 'Email' field is the unique identifier for a prospect in Account Engagement and is strictly required for a form handler submission to successfully create or update a prospect."
            },
            {
                "id": "q24",
                "text": "You want to ensure that internal employees testing a form do not affect the form's submission statistics. What should you do?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Set up a Visitor Filter with the internal IP address."
                    },
                    {
                        "id": "B",
                        "text": "Ask employees not to test the form."
                    },
                    {
                        "id": "C",
                        "text": "Delete the prospects created during testing."
                    },
                    {
                        "id": "D",
                        "text": "Use a test list."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Set up a Visitor Filter with the internal IP address. Explanation: Visitor Filters exclude activity (including form views and submissions) from specified IP addresses, keeping metrics clean."
            },
            {
                "id": "q25",
                "text": "A company wants to assign leads to different sales queues based on their geographic location (State). What is the most efficient way to automate this in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create a segmentation rule for each state."
                    },
                    {
                        "id": "B",
                        "text": "Use an automation rule to assign based on the State field."
                    },
                    {
                        "id": "C",
                        "text": "Assign them manually from a dynamic list."
                    },
                    {
                        "id": "D",
                        "text": "Let Salesforce handle the assignment via lead assignment rules after syncing."
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "Let Salesforce handle the assignment via lead assignment rules after syncing. Explanation: While Account Engagement can assign prospects, complex routing based on geography or other criteria is often best handled by Salesforce's robust Lead Assignment Rules after the prospect is assigned to Salesforce."
            },
            {
                "id": "q26",
                "text": "The marketing team wants to create a list of prospects who have clicked a link in any email in the past 30 days and have a score greater than 100. This list needs to update continuously. What should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Static List"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "C",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Segmentation Rule"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Dynamic List Explanation: Dynamic Lists automatically add or remove prospects based on matching criteria (like recent email clicks and score). They update continuously."
            },
            {
                "id": "q27",
                "text": "You have set up Einstein Behavior Scoring. A prospect has a behavior score of 85. What does this indicate?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect has viewed 85 pages on your website."
                    },
                    {
                        "id": "B",
                        "text": "The prospect has an 85% probability of opening the next email."
                    },
                    {
                        "id": "C",
                        "text": "The prospect's recent engagement behavior strongly suggests they are ready to purchase compared to other prospects."
                    },
                    {
                        "id": "D",
                        "text": "The prospect matches 85% of your ideal customer profile."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "The prospect's recent engagement behavior strongly suggests they are ready to purchase compared to other prospects. Explanation: Einstein Behavior Scoring uses machine learning to look at past engagement data and identify which prospects demonstrate buying signals, assigning a score relative to other prospects."
            },
            {
                "id": "q28",
                "text": "A prospect submits a form, which triggers an autoresponder email. They then click a link in that email. How many points will their score increase if the default scoring rules are applied?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "50 (Form submission) + 0 (Autoresponder click)"
                    },
                    {
                        "id": "B",
                        "text": "50 (Form submission) + 3 (Email click)"
                    },
                    {
                        "id": "C",
                        "text": "50 (Form submission) + 10 (Email click)"
                    },
                    {
                        "id": "D",
                        "text": "0 (Form submission) + 3 (Email click)"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "50 (Form submission) + 3 (Email click) Explanation: By default, form submissions grant 50 points. A click in a standard or autoresponder email grants 3 points."
            },
            {
                "id": "q29",
                "text": "You want to group prospects into 'Hot', 'Warm', and 'Cold' categories based on their score. Hot is > 100, Warm is 50-100, and Cold is < 50. Which tool is best suited to continuously place prospects into these categories for a campaign?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic Lists"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rules"
                    },
                    {
                        "id": "C",
                        "text": "Completion Actions"
                    },
                    {
                        "id": "D",
                        "text": "Custom Redirects"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Dynamic Lists Explanation: Dynamic lists are rule-based and continuously update. You would create three separate dynamic lists with the respective score criteria. Prospects will automatically move between them as their score changes."
            },
            {
                "id": "q30",
                "text": "A company uses Custom Redirects (tracked links) in their social media posts. A prospect clicks a Custom Redirect link on LinkedIn. The link has a completion action to add 5 points to the prospect's score. What happens if the prospect is anonymous?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The 5 points are added immediately to a temporary profile."
                    },
                    {
                        "id": "B",
                        "text": "The click is tracked, and if the visitor later converts to a prospect, the 5 points will be added to their score."
                    },
                    {
                        "id": "C",
                        "text": "The completion action fails and an error is logged."
                    },
                    {
                        "id": "D",
                        "text": "The visitor is prompted to fill out a form before the link resolves."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The click is tracked, and if the visitor later converts to a prospect, the 5 points will be added to their score. Explanation: Anonymous visitors' activities (like clicking custom redirects) are tracked via cookies. If they later convert, that past activity is tied to their new prospect record, and any associated completion actions (like scoring) are applied retroactively."
            },
            {
                "id": "q31",
                "text": "A marketing manager wants to downgrade the score of prospects who have not engaged with any emails or the website in the last 6 months. How can this be automated?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use an automation rule that matches prospects inactive for 180 days and applies an action to adjust prospect score by a negative amount."
                    },
                    {
                        "id": "B",
                        "text": "Change the default scoring rules to penalize inactivity."
                    },
                    {
                        "id": "C",
                        "text": "Use a segmentation rule to find inactive prospects and manually adjust their scores."
                    },
                    {
                        "id": "D",
                        "text": "Create an Engagement Studio program with a pause step for 6 months."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Use an automation rule that matches prospects inactive for 180 days and applies an action to adjust prospect score by a negative amount. Explanation: Automation rules can look for inactivity (\"Prospect time since last activity is greater than 180 days\") and apply an action to adjust the score by a specific value."
            },
            {
                "id": "q32",
                "text": "You want to assign prospects to a specific sales rep if their title contains \"VP\" or \"Director\" AND they are located in \"California\". Which feature should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Completion Action"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic List"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Automation Rule Explanation: Automation Rules evaluate continuously against criteria and apply actions (like assigning to a user). They are perfect for criteria-based assignment logic."
            },
            {
                "id": "q33",
                "text": "What is the key difference between a Segmentation Rule and an Automation Rule?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Segmentation Rules are continuous; Automation Rules run once."
                    },
                    {
                        "id": "B",
                        "text": "Segmentation Rules run once to create a list or apply a tag; Automation Rules run continuously to evaluate and apply actions."
                    },
                    {
                        "id": "C",
                        "text": "Segmentation Rules can change scores; Automation Rules cannot."
                    },
                    {
                        "id": "D",
                        "text": "Segmentation Rules are used for reporting; Automation Rules are used for email sending."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Segmentation Rules run once to create a list or apply a tag; Automation Rules run continuously to evaluate and apply actions. Explanation: Segmentation Rules are a one-time snapshot used to gather prospects. Automation Rules run constantly in the background."
            },
            {
                "id": "q34",
                "text": "A prospect has a grade of 'D'. The marketing team wants to improve this grade. What factors influence a prospect's grade?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Email opens, clicks, and form submissions."
                    },
                    {
                        "id": "B",
                        "text": "The prospect's profile criteria matching (e.g., job title, industry, company size)."
                    },
                    {
                        "id": "C",
                        "text": "The amount of time spent on the website."
                    },
                    {
                        "id": "D",
                        "text": "The number of times the prospect has been assigned to a sales rep."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The prospect's profile criteria matching (e.g., job title, industry, company size). Explanation: Grading is based on demographic and firmographic data (how well they fit your ideal customer profile), whereas Scoring is based on engagement/behavior."
            },
            {
                "id": "q35",
                "text": "You want to ensure that any prospect with an email address ending in '@competitor.com' is never assigned to sales and their score is set to zero. What is the best method?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create an automation rule based on the email domain to adjust the score to 0 and apply a 'Do Not Sync' tag."
                    },
                    {
                        "id": "B",
                        "text": "Set up a completion action on all forms to check the email address."
                    },
                    {
                        "id": "C",
                        "text": "Use a dynamic list to monitor competitors."
                    },
                    {
                        "id": "D",
                        "text": "Delete the prospects manually."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Create an automation rule based on the email domain to adjust the score to 0 and apply a 'Do Not Sync' tag. Explanation: An automation rule can identify the competitor domain, reset the score, and apply an action or tag to prevent assignment or syncing to Salesforce."
            },
            {
                "id": "q36",
                "text": "A prospect's score is 150, but their grade is 'F'. According to standard lead qualification strategies, what does this represent?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A highly engaged prospect who does not fit the ideal customer profile."
                    },
                    {
                        "id": "B",
                        "text": "A prospect who perfectly fits the ideal customer profile but is not engaged."
                    },
                    {
                        "id": "C",
                        "text": "A prospect who is ready to be assigned to sales."
                    },
                    {
                        "id": "D",
                        "text": "A spam bot."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "A highly engaged prospect who does not fit the ideal customer profile. Explanation: A high score indicates high engagement (lots of clicks, views, etc.), but a low grade indicates poor fit based on their demographic profile (e.g., they might be a student researching a topic)."
            },
            {
                "id": "q37",
                "text": "You need to apply a specific tag to a list of 5,000 existing prospects based on their attendance at a past event (recorded in a custom field). This is a one-time cleanup task. Which tool is most appropriate?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "B",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "D",
                        "text": "Completion Action"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Segmentation Rule Explanation: A segmentation rule is best for a one-time criteria-based action (like applying a tag retroactively) across the database."
            },
            {
                "id": "q38",
                "text": "How does Account Engagement handle duplicate leads during the sync process with Salesforce if 'Allow Multiple Prospects with the Same Email Address' (AMPSEA) is enabled?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It automatically merges them based on the oldest record."
                    },
                    {
                        "id": "B",
                        "text": "It uses the CRM ID (Lead/Contact ID) as the unique identifier to sync with the corresponding record in Salesforce."
                    },
                    {
                        "id": "C",
                        "text": "It blocks the sync until the duplicates are resolved in Salesforce."
                    },
                    {
                        "id": "D",
                        "text": "It relies entirely on the email address for deduplication."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "It uses the CRM ID (Lead/Contact ID) as the unique identifier to sync with the corresponding record in Salesforce. Explanation: With AMPSEA, Account Engagement uses the CRM ID as the primary key. If multiple prospects have the same email, it syncs them to their respective Leads/Contacts in Salesforce based on the CRM ID."
            },
            {
                "id": "q39",
                "text": "The marketing team wants to send a monthly newsletter. They want to ensure that prospects who have opted out of the 'Product Updates' list still receive the newsletter if they are on the 'Newsletter' list. How should they manage this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create an automation rule to opt them back in."
                    },
                    {
                        "id": "B",
                        "text": "Use a global opt-out field for all emails."
                    },
                    {
                        "id": "C",
                        "text": "Implement Email Preference Centers and Public Lists."
                    },
                    {
                        "id": "D",
                        "text": "Send the email as an operational email."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Implement Email Preference Centers and Public Lists. Explanation: Email Preference Centers allow prospects to manage their subscriptions to different types of communications (represented by Public Lists). They can opt-out of \"Product Updates\" but remain opted-in to the \"Newsletter\"."
            },
            {
                "id": "q40",
                "text": "You are reviewing the List Email Report and notice a high hard bounce rate. What is the most likely cause?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The recipient's mailbox is temporarily full."
                    },
                    {
                        "id": "B",
                        "text": "The recipient's email address is invalid or the domain does not exist."
                    },
                    {
                        "id": "C",
                        "text": "An out-of-office autoresponder was triggered."
                    },
                    {
                        "id": "D",
                        "text": "The email was flagged as spam by the recipient's firewall."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The recipient's email address is invalid or the domain does not exist. Explanation: A hard bounce occurs when an email is permanently undeliverable, typically because the address is fake, has a typo, or the domain is dead. A full mailbox or out-of-office is a soft bounce."
            },
            {
                "id": "q41",
                "text": "A marketing user wants to include a prospect's first name in the subject line of an email. What feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "B",
                        "text": "Snippets"
                    },
                    {
                        "id": "C",
                        "text": "Personalization Strings (Merge Fields)"
                    },
                    {
                        "id": "D",
                        "text": "Variable Tags"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Personalization Strings (Merge Fields) Explanation: Personalization Strings (formerly Variable Tags, but modern terminology refers to merge fields) are used to pull data directly from a prospect's record (like First Name) into the email subject line or body."
            },
            {
                "id": "q42",
                "text": "What is the primary purpose of authenticating Account Engagement emails (setting up SPF, DKIM, and DMARC)?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To track email opens more accurately."
                    },
                    {
                        "id": "B",
                        "text": "To bypass spam filters and improve email deliverability."
                    },
                    {
                        "id": "C",
                        "text": "To allow prospects to reply directly to the sender."
                    },
                    {
                        "id": "D",
                        "text": "To encrypt the contents of the email."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "To bypass spam filters and improve email deliverability. Explanation: Authenticating emails proves to receiving servers that Account Engagement is authorized to send emails on behalf of your domain, significantly reducing the chance of being marked as spam."
            },
            {
                "id": "q43",
                "text": "You want to send a critical system outage notification to all customers, including those who have opted out of marketing communications. How can you accomplish this in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Temporarily un-opt-out all prospects, send the email, and then opt them back out."
                    },
                    {
                        "id": "B",
                        "text": "Send the email marked as 'Operational' (requires special permission/setup)."
                    },
                    {
                        "id": "C",
                        "text": "Use a third-party tool; Account Engagement cannot send to opted-out prospects."
                    },
                    {
                        "id": "D",
                        "text": "Create a new list and bypass the suppression list."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Send the email marked as 'Operational' (requires special permission/setup). Explanation: Operational emails bypass opt-outs. They are strictly for non-marketing communications like system outages, privacy policy updates, or billing notices."
            },
            {
                "id": "q44",
                "text": "A marketer wants to test the performance of two different subject lines for a promotional email. Which feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Engagement Studio branching"
                    },
                    {
                        "id": "B",
                        "text": "A/B Testing on List Emails"
                    },
                    {
                        "id": "C",
                        "text": "Two separate list email sends"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic Content"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "A/B Testing on List Emails Explanation: Account Engagement provides native A/B testing for List Emails, allowing you to test different subject lines, senders, or email content to a portion of your list before sending the winner to the rest."
            },
            {
                "id": "q45",
                "text": "You are building an email template and want to ensure it looks good on both desktop and mobile devices. What design approach should you take?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use image-only emails."
                    },
                    {
                        "id": "B",
                        "text": "Build the template using responsive HTML/CSS."
                    },
                    {
                        "id": "C",
                        "text": "Create two separate templates and use an automation rule to send the correct one."
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement templates are not mobile-responsive."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Build the template using responsive HTML/CSS. Explanation: Best practice is to design emails responsively so they automatically adjust their layout to fit the screen size of the device they are viewed on."
            },
            {
                "id": "q46",
                "text": "When preparing to send an email, you select a Recipient List and a Suppression List. A prospect exists on both lists. What will happen?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect will receive the email."
                    },
                    {
                        "id": "B",
                        "text": "The prospect will not receive the email."
                    },
                    {
                        "id": "C",
                        "text": "The email system will prompt you to resolve the conflict."
                    },
                    {
                        "id": "D",
                        "text": "The prospect will receive two copies of the email."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The prospect will not receive the email. Explanation: Suppression lists always take precedence over recipient lists. If a prospect is on both, they will be excluded from the send."
            },
            {
                "id": "q47",
                "text": "The marketing team wants to automatically send a follow-up email to prospects who clicked a specific link in an initial list email send. Which feature provides the easiest way to accomplish this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Completion Action on the List Email"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Engagement Studio Program"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic List"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Completion Action on the List Email Explanation: You can add completion actions directly to a List Email send, such as \"If prospect clicks link X, send autoresponder email Y\". This is the most direct method."
            },
            {
                "id": "q48",
                "text": "What metric on the Email Template Report indicates the percentage of delivered emails that were opened?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Delivery Rate"
                    },
                    {
                        "id": "B",
                        "text": "Open Rate"
                    },
                    {
                        "id": "C",
                        "text": "Click-Through Rate"
                    },
                    {
                        "id": "D",
                        "text": "Click-to-Open Rate"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Open Rate Explanation: The Open Rate is calculated as the number of unique opens divided by the number of emails successfully delivered (Total Sent - Hard/Soft Bounces)."
            },
            {
                "id": "q49",
                "text": "A user is trying to send a list email, but the 'Send' button is grayed out. What is a common reason for this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The email lacks an unsubscribe link or preference center link."
                    },
                    {
                        "id": "B",
                        "text": "The user does not have permission to send emails."
                    },
                    {
                        "id": "C",
                        "text": "The recipient list has fewer than 10 prospects."
                    },
                    {
                        "id": "D",
                        "text": "The email subject line is too short."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "The email lacks an unsubscribe link or preference center link. Explanation: Account Engagement requires either an unsubscribe link or a preference center link in all non-operational emails to comply with anti-spam regulations (CAN-SPAM/GDPR)."
            },
            {
                "id": "q50",
                "text": "You want to insert a reusable block of text (e.g., legal terms and conditions) into multiple email templates, so that if the text changes, it updates everywhere. Which feature should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "B",
                        "text": "Snippets"
                    },
                    {
                        "id": "C",
                        "text": "Personalization Strings"
                    },
                    {
                        "id": "D",
                        "text": "Custom Redirects"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Snippets Explanation: Snippets are reusable blocks of text, HTML, or images that can be inserted into emails or landing pages. Updating the snippet updates it everywhere it is used."
            },
            {
                "id": "q51",
                "text": "You are building an Engagement Studio program and want to send a different email based on whether a prospect is located in \"North America\" or \"Europe\". Which element should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Action"
                    },
                    {
                        "id": "B",
                        "text": "Trigger"
                    },
                    {
                        "id": "C",
                        "text": "Rule"
                    },
                    {
                        "id": "D",
                        "text": "Pause"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Rule Explanation: A Rule step evaluates criteria (like a prospect's geographic location field) and splits the path into \"Yes\" or \"No\" branches based on whether the criteria are met."
            },
            {
                "id": "q52",
                "text": "In an Engagement Studio program, what is the difference between a Trigger and a Rule?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Triggers evaluate prospect actions (e.g., email opens); Rules evaluate prospect criteria (e.g., field values)."
                    },
                    {
                        "id": "B",
                        "text": "Triggers apply an action; Rules check if an action occurred."
                    },
                    {
                        "id": "C",
                        "text": "Triggers wait for a specific time; Rules evaluate immediately."
                    },
                    {
                        "id": "D",
                        "text": "Triggers are used for emails; Rules are used for forms."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Triggers evaluate prospect actions (e.g., email opens); Rules evaluate prospect criteria (e.g., field values). Explanation: Triggers listen for an action taken by the prospect within a specified timeframe. Rules check a data point on the prospect's record at that exact moment."
            },
            {
                "id": "q53",
                "text": "A prospect reaches an Email Send action step in an Engagement Studio program. The step is configured to send \"Email A\". The prospect has previously received \"Email A\" from a different program. What happens?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect receives \"Email A\" again."
                    },
                    {
                        "id": "B",
                        "text": "The prospect skips the step and moves to the next node."
                    },
                    {
                        "id": "C",
                        "text": "The prospect is paused in the program until an administrator intervenes."
                    },
                    {
                        "id": "D",
                        "text": "The program sends a duplicate email alert."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The prospect skips the step and moves to the next node. Explanation: Account Engagement has built-in protection against sending the exact same email template to a prospect more than once to prevent spamming. They will skip the send step."
            },
            {
                "id": "q54",
                "text": "You add a Trigger step to an Engagement Studio program to check for an email open. You set the evaluation time to \"Wait up to 3 days\". What happens if the prospect opens the email on day 1?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect waits until day 3 to move down the \"Yes\" path."
                    },
                    {
                        "id": "B",
                        "text": "The prospect immediately moves down the \"Yes\" path."
                    },
                    {
                        "id": "C",
                        "text": "The prospect moves down the \"No\" path."
                    },
                    {
                        "id": "D",
                        "text": "The program evaluates again on day 3."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The prospect immediately moves down the \"Yes\" path. Explanation: When a trigger is set to \"Wait up to X days\", it listens constantly. As soon as the action (open) occurs, the prospect immediately proceeds down the Yes path without waiting for the full 3 days."
            },
            {
                "id": "q55",
                "text": "A marketing manager wants to pause an Engagement Studio program over the weekend so emails are only sent Monday through Friday. How is this configured?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Add a pause step before every email send."
                    },
                    {
                        "id": "B",
                        "text": "Configure the \"Send emails during business hours only\" setting in the program's main configuration."
                    },
                    {
                        "id": "C",
                        "text": "Use a Rule step to check the day of the week."
                    },
                    {
                        "id": "D",
                        "text": "Engagement programs cannot be paused on weekends."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Configure the \"Send emails during business hours only\" setting in the program's main configuration. Explanation: When starting or editing a program, you can define business hours (e.g., 9-5, M-F). Emails will be held and sent only during those times."
            },
            {
                "id": "q56",
                "text": "You want to add prospects to an Engagement Studio program only after they have attended a webinar. Which method is most effective?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use a static list as the recipient list and manually add attendees."
                    },
                    {
                        "id": "B",
                        "text": "Use an automation rule to add attendees to a dynamic list, and use that dynamic list as the recipient list."
                    },
                    {
                        "id": "C",
                        "text": "Use a Rule step at the beginning of the program to check for webinar attendance."
                    },
                    {
                        "id": "D",
                        "text": "Create a custom trigger in the program."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Use an automation rule to add attendees to a dynamic list, and use that dynamic list as the recipient list. Explanation: A dynamic list automatically updates. An automation rule can identify webinar attendees and add them to the list, feeding them into the program dynamically."
            },
            {
                "id": "q57",
                "text": "An Engagement Studio program has been running for 3 months. The marketing team wants to add a new email to the middle of the journey. What must they do?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create a new program and move the prospects over."
                    },
                    {
                        "id": "B",
                        "text": "Pause the program, add the new step, and then restart the program."
                    },
                    {
                        "id": "C",
                        "text": "Add the new step while the program is running; changes take effect immediately."
                    },
                    {
                        "id": "D",
                        "text": "Prospects already past that point will be looped back to receive the new email."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Pause the program, add the new step, and then restart the program. Explanation: You must pause an active Engagement Studio program to edit its steps. Once restarted, prospects will resume from where they were paused."
            },
            {
                "id": "q58",
                "text": "What happens to a prospect if they are removed from the recipient list of an active Engagement Studio program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They complete the current step and then drop out."
                    },
                    {
                        "id": "B",
                        "text": "They are immediately removed from the program and stop progressing."
                    },
                    {
                        "id": "C",
                        "text": "They finish the entire program but receive no further emails."
                    },
                    {
                        "id": "D",
                        "text": "They are moved to the suppression list."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "They are immediately removed from the program and stop progressing. Explanation: If a prospect is removed from the recipient list (e.g., they no longer match a dynamic list's criteria), they are instantly removed from the program and will not execute any further steps."
            },
            {
                "id": "q59",
                "text": "You want to test the logic of an Engagement Studio program before starting it. Which feature allows you to simulate a prospect's journey?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Test List Sending"
                    },
                    {
                        "id": "B",
                        "text": "Engagement Studio Testing Tab"
                    },
                    {
                        "id": "C",
                        "text": "A/B Testing"
                    },
                    {
                        "id": "D",
                        "text": "Sandbox Mode"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Engagement Studio Testing Tab Explanation: The Testing tab in Engagement Studio allows you to run through the program logic, choosing \"Yes\" or \"No\" paths, to ensure it functions as expected before starting it."
            },
            {
                "id": "q60",
                "text": "A prospect reaches the end of an Engagement Studio program. A week later, they submit a form that matches the criteria of the program's recipient dynamic list again. If the program is set to allow prospects to enter more than once, what happens?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect re-enters the program immediately."
                    },
                    {
                        "id": "B",
                        "text": "The prospect must wait to re-enter based on the \"Days before eligible to reenter\" setting on the program."
                    },
                    {
                        "id": "C",
                        "text": "The prospect cannot re-enter the same program."
                    },
                    {
                        "id": "D",
                        "text": "The prospect enters a duplicate instance of the program."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The prospect must wait to re-enter based on the \"Days before eligible to reenter\" setting on the program. Explanation: When allowing prospects to re-enter a program, you must define a waiting period to prevent them from looping endlessly. They must wait that duration after completing the program before they can enter again."
            }
        ]
    },
    {
        "id": "exam_9",
        "title": "Salesforce Exam 3",
        "questions": [
            {
                "id": "q1",
                "text": "A visitor has been browsing a company's website anonymously for several weeks. The marketing team identifies the visitor's firmographic data and manually associates the visitor session with an existing prospect record. What happens to the visitor's previous anonymous activity?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "It is permanently deleted to comply with data privacy regulations."
                    },
                    {
                        "id": "B",
                        "text": "It remains anonymous and only future activity is tracked on the prospect record."
                    },
                    {
                        "id": "C",
                        "text": "It is appended to the associated prospect's record, providing a complete historical view."
                    },
                    {
                        "id": "D",
                        "text": "It triggers an automatic sync to Salesforce to create a new Lead."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- When you manually associate an anonymous visitor with a prospect record in Account Engagement, all of that visitor's historical tracking data (such as page views and clicks) is appended to the prospect's record. This provides a comprehensive view of the prospect's engagement history prior to conversion."
            },
            {
                "id": "q2",
                "text": "A prospect submits a form on your website, which includes a completion action to assign them to a specific user. Later that same day, the prospect visits the pricing page, which has a page action configured to increase the prospect's score by 10 points. Which of the following statements is true regarding this sequence of events?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect will not be assigned to the user until the page action is triggered."
                    },
                    {
                        "id": "B",
                        "text": "The form submission converts the visitor to a prospect, and the subsequent page view adds 10 points to their score."
                    },
                    {
                        "id": "C",
                        "text": "The prospect is tracked as a visitor until the page action triggers the conversion."
                    },
                    {
                        "id": "D",
                        "text": "Page actions can only be applied to anonymous visitors, so the score remains unchanged."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- A form submission is a standard conversion event that turns an anonymous visitor into a known prospect. Any subsequent activities, such as viewing a page with an associated page action, will track against that known prospect record and apply the configured actions (like adding 10 points to the score)."
            },
            {
                "id": "q3",
                "text": "A marketer is importing a CSV of leads from a recent tradeshow into Account Engagement. They want to update the \"Job Title\" field for existing prospects but ensure the \"Company\" field is NOT overwritten if the prospect already has a company listed in Account Engagement. How should the import be configured? (Choose 2 answers)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Check \"Overwrite existing data\" on the \"Job Title\" field mapping during the import process."
                    },
                    {
                        "id": "B",
                        "text": "Uncheck \"Overwrite existing data\" on the \"Company\" field mapping during the import process."
                    },
                    {
                        "id": "C",
                        "text": "Select \"Overwrite existing data\" globally on the first step of the data import wizard."
                    },
                    {
                        "id": "D",
                        "text": "Set the sync behavior for the \"Company\" field to \"Use Account Engagement's Value\" prior to the import."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B"
                ],
                "explanation": "- Account Engagement allows field-level control over data overwriting during imports. By checking \"Overwrite existing data\" for the Job Title mapping (A) and leaving it unchecked for the Company mapping (B), the marketer ensures that only the desired fields are updated for existing prospects without globally overwriting all data."
            },
            {
                "id": "q4",
                "text": "A prospect clicks the \"Unsubscribe\" link in an Account Engagement email, changing their status to globally opted out. A week later, the prospect visits the website and submits a form to download a whitepaper. What is the prospect's opt-out status immediately after the form submission?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are automatically opted back in because they actively submitted a new form."
                    },
                    {
                        "id": "B",
                        "text": "They remain opted out; form submissions do not automatically override a global opt-out."
                    },
                    {
                        "id": "C",
                        "text": "Account Engagement creates a duplicate prospect record that is opted in."
                    },
                    {
                        "id": "D",
                        "text": "They are opted in, but only for emails related to the whitepaper campaign."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- A global opt-out (unsubscribing) is a strict compliance status. Simply submitting a form does not automatically override this status or opt the prospect back in. The prospect remains opted out of marketing emails unless they manually resubscribe via an automated resubscribe prompt or preference center."
            },
            {
                "id": "q5",
                "text": "A B2B company has a strict data privacy policy and needs to ensure that visitors from the European Union (EU) are not tracked without their explicit consent. They have implemented a cookie consent banner on their website. How should Account Engagement be configured to comply with this requirement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create an automation rule that deletes prospect records if their IP address is located in the EU."
                    },
                    {
                        "id": "B",
                        "text": "Disable the Account Engagement tracking code completely on all regional landing pages."
                    },
                    {
                        "id": "C",
                        "text": "Set up a dynamic list to segment EU prospects and manually remove them from tracking campaigns."
                    },
                    {
                        "id": "D",
                        "text": "Enable \"Tracking Opt-in Preferences\" in Account Engagement and set it to request opt-in for visitors from EU IP addresses."
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "- Account Engagement has a native \"Tracking Opt-in Preferences\" feature that can be configured to show a cookie consent banner. Administrators can set this to apply globally to all visitors, or specifically target visitors originating from EU IP addresses to comply with GDPR and similar privacy regulations."
            },
            {
                "id": "q6",
                "text": "An Account Engagement administrator needs to create a new custom field to capture a prospect's \"Industry\". This field already exists in Salesforce on both the Lead and Contact objects. To ensure seamless data syncing, how should the administrator configure the custom field in Account Engagement? (Choose 3 answers)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Create the custom field in Account Engagement and map it to the corresponding Salesforce field name."
                    },
                    {
                        "id": "B",
                        "text": "Ensure the field type in Account Engagement matches the field type in Salesforce (e.g., Dropdown)."
                    },
                    {
                        "id": "C",
                        "text": "Map the Account Engagement field to the Salesforce Account object instead of Lead or Contact."
                    },
                    {
                        "id": "D",
                        "text": "Set the sync behavior to \"Use Salesforce's value\" if Salesforce should be the master for this data."
                    },
                    {
                        "id": "E",
                        "text": "Set the sync behavior to \"Use Account Engagement's value\" to ensure Salesforce is always overwritten."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "D"
                ],
                "explanation": "- To correctly sync a custom field, the administrator must create it in Account Engagement and map it to the exact CRM field name (A), ensure the field types match between both systems (B), and define the sync behavior (such as \"Use Salesforce's value\") to dictate which system is the master in case of a data conflict (D)."
            },
            {
                "id": "q7",
                "text": "A company uses Account Engagement Plus Edition (formerly Professional). The Marketing Director wants to review and approve all list emails before they are sent by the marketing team. How can the administrator enforce this requirement using default functionalities?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Assign the email creators the \"Marketing\" role and the Director the \"Administrator\" role, utilizing the native email approval process."
                    },
                    {
                        "id": "B",
                        "text": "There is no native email approval process or custom roles in Plus edition; email creators must save as draft and the Director must manually review and send."
                    },
                    {
                        "id": "C",
                        "text": "Assign the email creators the \"Sales\" role so they are restricted to only creating email templates."
                    },
                    {
                        "id": "D",
                        "text": "Implement a custom user role that removes the ability to send list emails, assigning it to the marketing team."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Account Engagement does not have a native \"approval process\" feature for emails like Salesforce does for records. Furthermore, Plus (formerly Professional) edition does not include Custom User Roles. Therefore, the only way to handle this with default functionalities is a manual process where creators save emails as drafts, and the Director logs in to review and send them."
            },
            {
                "id": "q8",
                "text": "A company has recently rebranded and changed its primary domain from oldcompany.com to newcompany.com. The administrator needs to update Account Engagement to reflect this change. Which of the following administrative tasks MUST be completed to ensure links and landing pages continue to work correctly? (Choose 2 answers)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Add the new domain to the Tracker Domains in Account Engagement domain management."
                    },
                    {
                        "id": "B",
                        "text": "Delete the old Tracker Domain immediately to redirect all traffic to the new site."
                    },
                    {
                        "id": "C",
                        "text": "Update the CNAME record in the company's DNS settings to point go.newcompany.com to go.pardot.com."
                    },
                    {
                        "id": "D",
                        "text": "Change the username of all Account Engagement users to use the new @newcompany.com email address."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "C"
                ],
                "explanation": "- To set up a new tracker domain, the administrator must add the new domain within Account Engagement's domain management settings (A) and coordinate with their IT team to update the DNS settings, adding a CNAME record that points the new subdomain to go.pardot.com (C). Deleting the old domain immediately would break existing links."
            },
            {
                "id": "q9",
                "text": "A sales representative complains that they are not receiving notification emails when their assigned prospects submit a specific \"Contact Us\" form. The administrator checks the form and sees that there are no completion actions set to notify the assigned user. What is the most scalable way to ensure the sales rep is notified moving forward, without modifying the form's completion actions?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create a dynamic list based on the form submission and email the list to the sales rep weekly."
                    },
                    {
                        "id": "B",
                        "text": "Set up a Page Action on the form's thank you page to notify the assigned user."
                    },
                    {
                        "id": "C",
                        "text": "Tell the sales rep to check Salesforce for new leads instead of relying on email notifications."
                    },
                    {
                        "id": "D",
                        "text": "Create an automation rule with the criteria: Prospect form [ Contact Us ] was completed successfully, and the action: Notify assigned user."
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "- An automation rule is the most efficient and scalable way to achieve this without modifying the form itself. The rule can be set to look for the specific form submission and execute the \"Notify assigned user\" action. This keeps the logic decoupled from the form's completion actions."
            },
            {
                "id": "q10",
                "text": "A B2B company tracks customer agreements in a custom object called \"Contracts\" in Salesforce, which is related to the Contact object. The marketing team wants to run an automation rule in Account Engagement when a Contract status changes to \"Renewed\". How should the administrator enable this functionality?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Export the \"Contracts\" data from Salesforce and manually import it as custom fields on the prospect record."
                    },
                    {
                        "id": "B",
                        "text": "Sync the custom object to Account Engagement, ensuring the Account Engagement connector user has read permissions for the object in Salesforce."
                    },
                    {
                        "id": "C",
                        "text": "It is not possible to trigger automation rules based on custom object data in Account Engagement."
                    },
                    {
                        "id": "D",
                        "text": "Create a custom object in Account Engagement and map it directly to the Lead object in Salesforce."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Account Engagement Advanced and Premium editions (or those with the add-on) support Custom Object syncing. By syncing the \"Contracts\" custom object and ensuring the integration user has the correct read permissions in Salesforce, the marketing team can use that custom object data as criteria in automation rules."
            },
            {
                "id": "q11",
                "text": "A global company wants to organize their Account Engagement assets (forms, landing pages, files). They need a hierarchical structure to control user access via Folder Permissions, ensuring regional teams only see their own localized assets. What feature must the administrator use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Tags"
                    },
                    {
                        "id": "B",
                        "text": "Scoring Categories"
                    },
                    {
                        "id": "C",
                        "text": "Campaigns"
                    },
                    {
                        "id": "D",
                        "text": "Folders"
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "- Folders provide a hierarchical organizational structure in Account Engagement. More importantly, they are the only organizational feature that allows administrators to apply Folder Permissions, which can restrict access to assets based on User Roles or Groups. Tags are flat and do not control access permissions."
            },
            {
                "id": "q12",
                "text": "A new marketing employee needs access to Account Engagement to manage prospect lists, create emails, and build landing pages. They should have full control over marketing modules but should NOT be able to edit Salesforce connector settings, manage users, or change field mappings. Which default user role is most appropriate for this employee?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Administrator"
                    },
                    {
                        "id": "B",
                        "text": "Sales Manager"
                    },
                    {
                        "id": "C",
                        "text": "Marketing"
                    },
                    {
                        "id": "D",
                        "text": "Sales"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- The default \"Marketing\" role provides access to all marketing modules (lists, emails, landing pages, forms) but restricts access to administrative functions like managing users, configuring the Salesforce connector, or altering field mappings. Pardot Forms, Form Handlers and Landing Pages"
            },
            {
                "id": "q13",
                "text": "A company has a highly customized, multi-step application form built on their website using custom CSS and JavaScript. They want to keep the current user experience intact but ensure that the data submitted is captured in Pardot to create or update prospect records. Which Pardot feature is best suited for this scenario?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Pardot Form iframe"
                    },
                    {
                        "id": "B",
                        "text": "Pardot Form Handler"
                    },
                    {
                        "id": "C",
                        "text": "Custom Redirect"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic Content"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- A Pardot Form Handler allows you to post data to Pardot from your existing forms. This is the ideal solution when a company wants to maintain complete control over the form's HTML, CSS, JavaScript, and multi-step logic on their own website while still capturing the submission data and triggering completion actions in Pardot."
            },
            {
                "id": "q14",
                "text": "A B2B marketing team wants to collect extensive information about their prospects, such as company size, job title, and phone number. However, they are concerned that a form with 10 fields will significantly decrease their conversion rate. What Pardot Form feature should they implement to gather this data gradually over multiple visits?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dependent Fields"
                    },
                    {
                        "id": "B",
                        "text": "Kiosk/Data Entry Mode"
                    },
                    {
                        "id": "C",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "D",
                        "text": "Form Field Mapping"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Progressive Profiling is a feature exclusive to Pardot Forms that allows you to display new fields based on data you have already collected from a prospect. Instead of asking for 10 fields at once, you can ask for 3 fields on the first visit, 3 different fields on the next visit, etc., thereby keeping forms short and optimizing conversion rates."
            },
            {
                "id": "q15",
                "text": "An event registration Pardot form requires visitors to specify their dietary restrictions only if they indicate they will be attending the post-event dinner. How can an administrator configure the form to hide the dietary restrictions field unless \"Yes\" is selected for the dinner attendance field?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Implement a Form Handler with conditional JavaScript logic."
                    },
                    {
                        "id": "B",
                        "text": "Use Dependent Fields on the Pardot Form."
                    },
                    {
                        "id": "C",
                        "text": "Utilize Dynamic Content within the form's layout template."
                    },
                    {
                        "id": "D",
                        "text": "Enable Progressive Profiling for the dietary restrictions field."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Dependent Fields allow you to hide or show specific fields based on the value selected in another field on a Pardot Form. In this scenario, making the \"Dietary Restrictions\" field dependent on the \"Post-event dinner attendance\" field ensures it only appears when relevant."
            },
            {
                "id": "q16",
                "text": "A company is hosting a booth at a large trade show and wants to use an iPad with a Pardot Form to collect visitor information. During a test run, the marketing manager notices that every time a new person submits the form, it overwrites the previous submitter's prospect record in Pardot. What must be configured on the Pardot Form to resolve this issue?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Check the \"Always display even if previously completed\" box."
                    },
                    {
                        "id": "B",
                        "text": "Enable \"Kiosk/Data Entry Mode\"."
                    },
                    {
                        "id": "C",
                        "text": "Turn off \"Re-captcha\" in the Advanced settings."
                    },
                    {
                        "id": "D",
                        "text": "Use a Form Handler instead of a Pardot Form."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- \"Kiosk/Data Entry Mode\" prevents Pardot from dropping a tracking cookie on the browser upon form submission. Without this mode, Pardot associates the browser's cookie with the submitted email address. If multiple people submit the form on the same device (like an iPad at a trade show), their information will continuously overwrite the same prospect record."
            },
            {
                "id": "q17",
                "text": "A marketing team is launching a new seasonal campaign and creates a Pardot Landing Page for it. They want the landing page to have a clean, easy-to-remember URL, such as www.company.com/spring-promo, to use in print advertising. How can they achieve this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create a Custom Redirect with the desired URL pointing to the Landing Page."
                    },
                    {
                        "id": "B",
                        "text": "Set up a Page Action for the URL www.company.com/spring-promo."
                    },
                    {
                        "id": "C",
                        "text": "Define a Vanity URL in the Landing Page settings."
                    },
                    {
                        "id": "D",
                        "text": "Modify the tracker domain settings in Salesforce Setup."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- A Vanity URL allows you to create a customized, memorable link for a Pardot Landing Page, Custom File, or Custom Redirect. By defining a Vanity URL directly in the Landing Page settings, you can define exactly what the URL path looks like (e.g., /spring-promo) attached to your tracker domain."
            },
            {
                "id": "q18",
                "text": "A marketing operations manager is deciding between using a Pardot Form or a Pardot Form Handler. Which two features are exclusively available on Pardot Forms and CANNOT be used with Pardot Form Handlers? (Choose 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Completion Actions"
                    },
                    {
                        "id": "B",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "C",
                        "text": "reCAPTCHA bot protection (native Pardot implementation)"
                    },
                    {
                        "id": "D",
                        "text": "Integrating with third-party form builders"
                    }
                ],
                "correctAnswers": [
                    "B",
                    "C"
                ],
                "explanation": "- Progressive Profiling and Pardot's native built-in reCAPTCHA functionality are only available when using Pardot Forms. Because Form Handlers rely on third-party form structures, Pardot cannot dynamically change the fields being displayed (Progressive Profiling) or natively inject its own reCAPTCHA logic into external HTML."
            },
            {
                "id": "q19",
                "text": "An organization wants to route leads to different sales queues based on the \"Country\" field selected on their \"Contact Us\" Pardot form. They want to set up this routing logic directly on the form asset without relying on an Automation Rule. Which feature allows them to achieve this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dependent Fields"
                    },
                    {
                        "id": "B",
                        "text": "Conditional Completion Actions"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "D",
                        "text": "Page Actions"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Conditional Completion Actions allow you to execute actions (like assigning to a specific user or queue) based on the prospect's field values directly from the form's settings. This eliminates the need to build separate Automation Rules for simple routing based on form submission data."
            },
            {
                "id": "q20",
                "text": "A web developer provides a marketing admin with a complete HTML/CSS file for a new landing page. After creating a new Layout Template in Pardot and pasting the code, the admin creates a Landing Page using the template but notices there are no editable regions in the Pardot builder interface. What is missing from the developer's HTML code?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The %%content%% variable tag"
                    },
                    {
                        "id": "B",
                        "text": "pardot-region attributes on the HTML elements"
                    },
                    {
                        "id": "C",
                        "text": "The <form> tag mapped to a Pardot Form handler"
                    },
                    {
                        "id": "D",
                        "text": "A custom JavaScript snippet for the Pardot WYSIWYG editor"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- To make areas of a custom Layout Template editable within the Pardot Landing Page builder, the developer must add pardot-region=\"name_of_region\" attributes to the HTML tags (like <div> or <p>). Without these tags, the entire layout is locked, and the marketer cannot add or edit content using the WYSIWYG editor."
            },
            {
                "id": "q21",
                "text": "A form handler is set up to capture submissions from a WordPress site. A prospect complains they filled out the form, but their record does not appear in Pardot. What are two valid reasons why the Form Handler might fail to create a prospect record? (Choose 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect's email domain was marked as a free email provider."
                    },
                    {
                        "id": "B",
                        "text": "A required field in the Pardot Form Handler received a blank value."
                    },
                    {
                        "id": "C",
                        "text": "The external form's HTML input name attribute does not match the \"External Field Name\" in the Form Handler."
                    },
                    {
                        "id": "D",
                        "text": "Progressive profiling was improperly configured on the Form Handler."
                    }
                ],
                "correctAnswers": [
                    "B",
                    "C"
                ],
                "explanation": "- For a Form Handler to successfully capture data, the external form's HTML name attribute must exactly match the \"External Field Name\" defined in Pardot (C). Additionally, if a field is marked as required in the Form Handler but the submission does not include a value for it, Pardot will reject the post and fail to create the prospect (B). Progressive profiling is not available on form handlers."
            },
            {
                "id": "q22",
                "text": "A marketer is reviewing the reporting metrics for a Pardot Landing Page. They notice a discrepancy between \"Total Views\" and \"Unique Views\". What constitutes a \"View\" in Pardot Landing Page reporting?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A view is recorded every time the prospect submits the form on the landing page."
                    },
                    {
                        "id": "B",
                        "text": "A view is recorded every time the page loads and the tracking code executes."
                    },
                    {
                        "id": "C",
                        "text": "A view is recorded only when an identified prospect accesses the page."
                    },
                    {
                        "id": "D",
                        "text": "A view is recorded when a visitor stays on the page for longer than 10 seconds."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- In Pardot reporting, a \"View\" is counted every time the page is loaded and the tracking script runs. This applies to both unknown visitors and identified prospects. \"Total Views\" counts every single page load, while \"Unique Views\" counts the number of distinct individuals (tracked via cookies) who have loaded the page."
            },
            {
                "id": "q23",
                "text": "A B2B software company wants to ensure high lead quality by preventing visitors from using personal email addresses (e.g., @gmail.com, @yahoo.com) when requesting a product demo via a Pardot Form. How can this be accomplished natively in Pardot?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Select \"Not from ISP and free email providers\" on the Email field's advanced settings."
                    },
                    {
                        "id": "B",
                        "text": "Create a conditional completion action to delete the prospect if the email contains \"gmail.com\"."
                    },
                    {
                        "id": "C",
                        "text": "Add custom JavaScript to the Layout Template to reject specific email domains."
                    },
                    {
                        "id": "D",
                        "text": "Set up an Automation Rule to immediately bounce emails from free providers."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Pardot has built-in email validation for form fields. By editing the Email field on the Pardot Form and checking the \"Not from ISP and free email providers\" option under the Data Format or Advanced tab, Pardot will natively reject submissions containing common free email domains (like Gmail or Yahoo) and prompt the user to enter a corporate email address."
            },
            {
                "id": "q24",
                "text": "A marketing manager is unsure whether a long descriptive headline or a short punchy headline will generate more signups on a new landing page. They want to test both versions and have Pardot automatically determine the winner based on form submissions. Which Pardot feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A/B Testing"
                    },
                    {
                        "id": "B",
                        "text": "Engagement Studio"
                    },
                    {
                        "id": "C",
                        "text": "Multivariate Testing"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic Content"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Multivariate Testing is the feature used in Pardot specifically for Landing Pages to test different variations of a page (like headlines, images, or button colors) to see which yields a higher conversion rate. A/B testing in Pardot is specifically used for List Emails, not Landing Pages. Lead Management (Marketing Strategy)"
            },
            {
                "id": "q25",
                "text": "LenoxSoft wants to implement a strategy to identify prospects who are actively engaged with their content but might not fit their ideal customer profile. They want to ensure sales reps prioritize only those who are both engaged and fit the profile, while marketing continues to nurture the rest. Which combination of Account Engagement features should the marketing team use to measure these two dimensions?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use Scoring to measure engagement and Grading to measure profile fit."
                    },
                    {
                        "id": "B",
                        "text": "Use Tags to track engagement and Lists to track profile fit."
                    },
                    {
                        "id": "C",
                        "text": "Use Automation Rules for engagement and Completion Actions for profile fit."
                    },
                    {
                        "id": "D",
                        "text": "Use Dynamic Lists for engagement and Segmentation Rules for profile fit."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Scoring in Account Engagement is used to measure a prospect's implicit interest and engagement with marketing assets (like email opens, clicks, and page views). Grading is used to measure how well a prospect fits the company's ideal customer profile based on explicit demographic data (like job title, industry, or company size). Using both ensures sales focuses on highly engaged prospects who also fit the buyer persona."
            },
            {
                "id": "q26",
                "text": "A marketing manager wants to send an auto-responder email immediately when a prospect fills out a specific \"Contact Us\" form. However, they only want this email to go out if the prospect indicates their country is the \"United States\" on the form. What is the most efficient way to set this up directly on the form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create an Automation Rule to send the email based on the form submission and country."
                    },
                    {
                        "id": "B",
                        "text": "Add a conditional Completion Action to the form where \"Country\" equals \"United States\" to send the email."
                    },
                    {
                        "id": "C",
                        "text": "Add a standard Completion Action to send the email to everyone, then a separate rule to delete it for non-US."
                    },
                    {
                        "id": "D",
                        "text": "Use an Engagement Studio program triggered by the form submission."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Conditional Completion Actions allow marketers to execute actions on forms or form handlers based on specific criteria from the prospect's record or the form submission itself. This is the most efficient way to trigger an email selectively immediately upon submission without creating additional rules."
            },
            {
                "id": "q27",
                "text": "Northern Trail Outfitters wants to automatically route new leads to their sales team based on the prospect's geographic location. If a prospect is in \"California\", they should go to the West Coast queue. If they are in \"New York\", they should go to the East Coast queue. Which Account Engagement features can be used to achieve this automated routing? (Select two)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Completion Actions on the form submission"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rules evaluating the Prospect Default Field 'State'"
                    },
                    {
                        "id": "C",
                        "text": "Active Salesforce Lead Assignment Rules triggered via Account Engagement"
                    },
                    {
                        "id": "D",
                        "text": "Segmentation Rules evaluating the Custom Field 'Region'"
                    }
                ],
                "correctAnswers": [
                    "B",
                    "C"
                ],
                "explanation": "- Automation Rules can evaluate prospect fields (like State) and execute actions, such as assigning a prospect to a specific user or queue. Alternatively, you can use an Automation Rule or Completion Action to push the prospect to Salesforce and let active Salesforce Lead Assignment Rules handle the complex geographic routing. Completion actions cannot natively assign to different queues conditionally without conditional logic, and segmentation rules are for one-time actions, not continuous automated routing."
            },
            {
                "id": "q28",
                "text": "A marketer needs to create a list of prospects who have attended at least two webinars in the past six months and have a grade of B or higher. This list will be used for an ongoing nurture campaign and needs to automatically add and remove prospects as their data changes over time. Which feature is appropriate?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Static List populated by a Segmentation Rule"
                    },
                    {
                        "id": "B",
                        "text": "CRM Visible List"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "D",
                        "text": "Static List populated by an Automation Rule"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- A Dynamic List automatically adds prospects when they match the criteria and removes them when they no longer match. Because this list is for an ongoing nurture campaign and relies on time-bound criteria (past six months), a Dynamic List is the only option that will continuously update itself."
            },
            {
                "id": "q29",
                "text": "LenoxSoft has a custom field called \"Industry\". When a prospect's Industry is updated to \"Healthcare\" or \"Financial Services\" at any time, their score should increase by 20 points. This should only happen once per prospect. Which automation tool is best suited for this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "C",
                        "text": "Completion Action"
                    },
                    {
                        "id": "D",
                        "text": "Automation Rule"
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "- An Automation Rule runs continuously in the background and evaluates prospects against criteria. By default, it executes its actions only once per prospect. This makes it the perfect tool for identifying prospects who match the Industry criteria and automatically adjusting their score by 20 points."
            },
            {
                "id": "q30",
                "text": "A company wants to progressively gather more information about their prospects over time without overwhelming them with long forms. They want to ask for \"Company Size\" on a prospect's second form submission and \"Job Title\" on their third. Which Account Engagement feature allows this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dependent Fields"
                    },
                    {
                        "id": "B",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "C",
                        "text": "Kiosk Mode"
                    },
                    {
                        "id": "D",
                        "text": "Form Handlers"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Progressive Profiling is a feature on Account Engagement forms that allows you to display new fields to a prospect based on the data you have already collected from them in previous submissions. This keeps forms short and incrementally builds out the prospect profile over time."
            },
            {
                "id": "q31",
                "text": "An administrator is cleaning up their database and wants to identify all prospects who have not been active in the last 180 days and have never clicked a link in an email. They want to add a tag \"Inactive_180\" to these prospects one time to prepare for a deletion sweep. Which automation tool is best for this one-time cleanup?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Completion Action"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- A Segmentation Rule is designed for one-time retroactive actions. It will scan the entire database, find the prospects matching the criteria (inactivity and no clicks), apply the tag \"Inactive_180\", and then stop running. Automation Rules run continuously, which is unnecessary for a one-time cleanup."
            },
            {
                "id": "q32",
                "text": "The sales team wants to be notified immediately whenever a prospect visits the high-value \"Pricing\" page on the company website. What Account Engagement feature should be used to accomplish this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Page Action"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Custom Redirect"
                    },
                    {
                        "id": "D",
                        "text": "Segmentation Rule"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- A Page Action allows marketers to define a specific URL on their tracked website and trigger completion actions (such as \"Notify assigned user\" or \"Notify user\") immediately when a known prospect views that specific page."
            },
            {
                "id": "q33",
                "text": "LenoxSoft is launching a new product and wants to track the overall success, ROI, and member status of the initial launch email, the landing page, and the subsequent whitepaper download. They have Connected Campaigns enabled. Which feature should they use as the overarching container for these marketing assets?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement Campaign"
                    },
                    {
                        "id": "B",
                        "text": "Salesforce Campaign"
                    },
                    {
                        "id": "C",
                        "text": "Account Engagement Folder"
                    },
                    {
                        "id": "D",
                        "text": "Engagement Studio Program"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- With Connected Campaigns enabled, Salesforce Campaigns act as the master container for all marketing initiatives. They allow you to associate Account Engagement assets (like emails, forms, and landing pages), track overall ROI, utilize campaign hierarchies, and manage Campaign Member statuses in a unified way across both platforms."
            },
            {
                "id": "q34",
                "text": "A marketer notices that their sales team is complaining about receiving too many unqualified leads. The marketer checks the current lead assignment process and sees an Automation Rule assigning prospects to sales simply if their score is greater than 10. How should the marketer adjust the strategy to improve lead quality? (Select two)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Increase the score threshold in the Automation Rule to a higher number indicating true engagement."
                    },
                    {
                        "id": "B",
                        "text": "Add a criteria for Prospect Grade to ensure profile fit before assignment."
                    },
                    {
                        "id": "C",
                        "text": "Change the Automation Rule to a Completion Action on all forms."
                    },
                    {
                        "id": "D",
                        "text": "Delete the Automation Rule and manually assign all prospects moving forward."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B"
                ],
                "explanation": "- To improve lead quality, the marketer needs stricter criteria before a lead is handed off to sales. Increasing the score threshold ensures the prospect has engaged more deeply with marketing assets. Adding a Grade criteria ensures the prospect also matches the ideal customer profile before sales spends time calling them."
            },
            {
                "id": "q35",
                "text": "A prospect clicks a link in an Account Engagement list email, which directs them to a partner's third-party registration page. The marketer wants to increase the prospect's score by 10 points specifically for clicking this link and track the clicks in reports. How can this be accomplished?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Add a Completion Action to the specific link directly in the email template editor."
                    },
                    {
                        "id": "B",
                        "text": "Create a Custom Redirect for the link and add a Completion Action to the Custom Redirect to adjust the score."
                    },
                    {
                        "id": "C",
                        "text": "Create an Automation Rule based on \"Prospect clicked link in email\"."
                    },
                    {
                        "id": "D",
                        "text": "Create a Page Action for the third-party page to adjust the score."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Custom Redirects are used to track clicks on banner ads, third-party sites, or specific links within emails. By creating a Custom Redirect, you can track the link's performance and easily attach Completion Actions (like increasing a score by 10 points) that trigger immediately when a prospect clicks it."
            },
            {
                "id": "q36",
                "text": "Northern Trail Outfitters wants to reset the score of all prospects to zero at the beginning of the new fiscal year to get a fresh look at engagement. Which automation tool allows you to adjust a prospect's score to a specific number?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "B",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Page Action"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- An Automation Rule is the correct tool because it can evaluate all prospects (or specific segments) and apply the action \"Adjust Prospect Score: To: 0\". Segmentation rules and Dynamic Lists cannot perform actions to adjust prospect scores."
            },
            {
                "id": "q37",
                "text": "A marketer is designing a lead nurturing strategy. When a prospect downloads a whitepaper, they are added to an Engagement Studio program. If they open the first email but do not click a link, the marketer wants them to wait 3 days and then receive a different email. Which Engagement Studio node type is used to listen for the link click?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Action node"
                    },
                    {
                        "id": "B",
                        "text": "Trigger node"
                    },
                    {
                        "id": "C",
                        "text": "Rule node"
                    },
                    {
                        "id": "D",
                        "text": "Stop node"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- In Engagement Studio, a Trigger node is used to \"listen\" for prospect behaviors or engagement, such as an email open, a link click, or a form submission, over a specified period of time. Rule nodes evaluate criteria (like a field value), and Action nodes perform actions (like sending an email or adding a tag)."
            },
            {
                "id": "q38",
                "text": "LenoxSoft uses a complex, custom-built third-party form tool on their website but wants to silently capture the submission data in Account Engagement to trigger automations and track campaigns without changing the form's front-end behavior. What is the recommended integration method?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement Form iFrame"
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement Form Handler"
                    },
                    {
                        "id": "C",
                        "text": "Engagement Studio Program"
                    },
                    {
                        "id": "D",
                        "text": "Manual CSV import"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Form Handlers allow you to keep your existing third-party forms and their front-end styling. By configuring the third-party form to post its data to the Account Engagement Form Handler URL, you can silently capture the submission data into Account Engagement in real-time. Email Marketing"
            },
            {
                "id": "q39",
                "text": "A marketer at Cloud Kicks wants to test two different subject lines for an upcoming webinar invitation to see which one yields a higher open rate. They want the winning version to be sent to the remaining audience automatically after 4 hours. Which combination of steps should the Account Engagement Specialist take to accomplish this? (Choose 2 answers)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Enable A/B Testing on a List Email draft."
                    },
                    {
                        "id": "B",
                        "text": "Enable A/B Testing on an Email Template."
                    },
                    {
                        "id": "C",
                        "text": "Set the test period to 4 hours and the winning criteria to Open Rate."
                    },
                    {
                        "id": "D",
                        "text": "Set the test period to 4 hours and the winning criteria to Click-Through Rate."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "C"
                ],
                "explanation": "- A/B testing is a feature specific to List Emails, not Email Templates. To automatically send the winning version after 4 hours based on opens, you must enable A/B testing on the List Email draft, set the duration to 4 hours, and choose 'Open Rate' as the winning criteria."
            },
            {
                "id": "q40",
                "text": "Universal Containers wants to send a single monthly newsletter to all their prospects. However, they want the featured article section to display differently based on the prospect's 'Industry' custom field. If the industry is blank, a generic article should be shown. What is the most efficient way to achieve this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create multiple Email Templates for each industry and use an Engagement Studio program to route prospects."
                    },
                    {
                        "id": "B",
                        "text": "Use Handlebars Merge Language (HML) IF statements to conditionally display the article within the email."
                    },
                    {
                        "id": "C",
                        "text": "Create a Dynamic Content variation for each industry, set a default variation, and embed it in the email."
                    },
                    {
                        "id": "D",
                        "text": "Create multiple List Emails and segment the recipient list by industry."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Dynamic Content is the most efficient and scalable way to display conditional content blocks based on prospect field values (like Industry) within a single email send. Setting a default variation handles prospects with blank values."
            },
            {
                "id": "q41",
                "text": "A user is creating an email template and wants to include the prospect's first name in the greeting. If the prospect's first name is not available in Account Engagement, the greeting should say \"Valued Customer\". How should the Account Engagement Specialist configure this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use the merge field {{Recipient.FirstName}} and set the default value for the First Name field to \"Valued Customer\" in Field Configuration."
                    },
                    {
                        "id": "B",
                        "text": "Use the merge field %%first_name%% and set the default value for the First Name field to \"Valued Customer\" in Field Configuration."
                    },
                    {
                        "id": "C",
                        "text": "Create a Dynamic Content block for the greeting and place it in the email."
                    },
                    {
                        "id": "D",
                        "text": "Use the HML tag {{#if Recipient.FirstName}}{{Recipient.FirstName}}{{else}}Valued Customer{{/if}}."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- The standard best practice for fallback values in greetings is to use the default HML merge field (e.g., {{Recipient.FirstName}}) and configure a default value (\"Valued Customer\") directly on the Prospect Field Configuration page. This ensures the fallback is applied globally whenever that field is merged."
            },
            {
                "id": "q42",
                "text": "A prospect clicks the \"Unsubscribe\" link at the bottom of an email sent via Account Engagement. The link directs them to the default Unsubscribe page. What is the immediate result of the prospect confirming their unsubscribe request?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect is deleted from the Account Engagement database."
                    },
                    {
                        "id": "B",
                        "text": "The prospect's 'Opted Out' field is checked, and they can no longer receive any emails."
                    },
                    {
                        "id": "C",
                        "text": "The prospect's 'Do Not Email' field is checked, and they can no longer receive marketing emails, but can receive operational emails."
                    },
                    {
                        "id": "D",
                        "text": "The prospect's 'Opted Out' field is checked, but they can still receive operational emails if the operational email feature is enabled."
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "- When a prospect uses the Unsubscribe link, their 'Opted Out' field is checked. This prevents them from receiving marketing emails. However, if the account has \"Operational Emails\" enabled, they can still receive critical non-marketing communications (like order confirmations or system updates) bypassing the opt-out status."
            },
            {
                "id": "q43",
                "text": "A marketing team notices a sudden spike in hard bounces for a recent list email send. Upon investigation, they realize many of the email addresses were valid, but the receiving server rejected them due to strict spam filters. What should the Account Engagement Specialist recommend to improve deliverability?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Ensure the domain is properly authenticated with SPF and DKIM."
                    },
                    {
                        "id": "B",
                        "text": "Warm up the IP address by sending to smaller lists over a week."
                    },
                    {
                        "id": "C",
                        "text": "Delete all prospects that hard bounced to improve the sender score."
                    },
                    {
                        "id": "D",
                        "text": "Switch from a shared IP to a dedicated IP address immediately."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Spam filters heavily weigh domain authentication. Ensuring Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM) are properly set up for the sending domain is the primary method to authenticate emails and bypass strict security filters that cause false hard bounces."
            },
            {
                "id": "q44",
                "text": "An Account Engagement user needs to send a targeted email to a list of VIP clients. The email must appear to come from the prospect's assigned CRM owner. If the prospect does not have an assigned owner, the email should appear to come from the generic \"marketing@company.com\" address. How should the sender options be configured on the List Email?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Set Sender to 'Assigned User' and add 'Specific User' (marketing@company.com) as the custom reply-to address."
                    },
                    {
                        "id": "B",
                        "text": "Set Sender to 'Specific User' (marketing@company.com) and enable 'Make this email come from the assigned owner if one exists'."
                    },
                    {
                        "id": "C",
                        "text": "Set Sender to 'Assigned User' and add a fallback Sender as 'General User' (marketing@company.com)."
                    },
                    {
                        "id": "D",
                        "text": "Create two separate List Emails and split the audience based on ownership status."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- When configuring sender options, you can select 'Assigned User' as the primary sender. You must also configure a fallback (e.g., a General User or specific email address) for prospects who do not have an assigned CRM owner."
            },
            {
                "id": "q45",
                "text": "The design team has provided custom HTML for a new email template. Before using it for a major campaign, the marketing manager wants to ensure the email looks correct across various desktop, webmail, and mobile email clients. Which Account Engagement feature should be utilized?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Send to Test List"
                    },
                    {
                        "id": "B",
                        "text": "Send to Individual Email"
                    },
                    {
                        "id": "C",
                        "text": "Render Test"
                    },
                    {
                        "id": "D",
                        "text": "Preview as Prospect"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Render Testing (powered by Litmus) allows users to see previews of how their email will look across various email clients, browsers, and devices before actually sending the email."
            },
            {
                "id": "q46",
                "text": "A marketer has set up an Engagement Studio program that sends an email, and then waits 3 days to check if the prospect clicked a specific link within that email. If the prospect receives the email but their corporate email security scanner automatically 'clicks' all links to check for malware, what is the most likely outcome in the Engagement Studio program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Engagement automatically identifies all scanner clicks and completely ignores them in the program logic."
                    },
                    {
                        "id": "B",
                        "text": "The prospect will be incorrectly evaluated as having clicked the link and routed down the 'Yes' path."
                    },
                    {
                        "id": "C",
                        "text": "The email will be marked as a hard bounce and the prospect will pause in the program."
                    },
                    {
                        "id": "D",
                        "text": "The engagement program will pause the prospect until a human verifies the click."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Email security scanners often \"click\" links to check for malicious content. While Account Engagement has some bot-click filtering capabilities, aggressive scanners can still cause false positives, leading the system to believe the prospect clicked the link, thereby routing them down the 'Yes' path in Engagement Studio."
            },
            {
                "id": "q47",
                "text": "A user is confused about when to use an Email Template versus a List Email. Which of the following scenarios specifically REQUIRES the use of an Email Template rather than just drafting a List Email? (Choose 2 answers)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Sending an Autoresponder email after a form submission."
                    },
                    {
                        "id": "B",
                        "text": "Sending an email through an Engagement Studio program."
                    },
                    {
                        "id": "C",
                        "text": "Sending a one-time newsletter to a static list."
                    },
                    {
                        "id": "D",
                        "text": "A/B testing an email subject line."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B"
                ],
                "explanation": "- Email Templates are required for automated system sends. This includes Autoresponders (form/list completion actions) and emails sent as action steps within Engagement Studio programs. List Emails are used for one-off manual sends."
            },
            {
                "id": "q48",
                "text": "Northern Trail Outfitters is launching a new product line and wants to track clicks on a specific banner image within their promotional email. They want to ensure that clicks on this banner trigger a score increase of 10 points for the prospect, in addition to the standard email click score. How can this be achieved?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Add a Custom Redirect to the banner image link and add a completion action to the Custom Redirect to adjust the score."
                    },
                    {
                        "id": "B",
                        "text": "Create a Page Action for the destination URL of the banner and set the score adjustment."
                    },
                    {
                        "id": "C",
                        "text": "Add a completion action directly to the List Email to increase the score upon link click."
                    },
                    {
                        "id": "D",
                        "text": "Use the Account Engagement tracking code on the destination URL to automatically adjust the score."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- While standard email clicks add points to the baseline score, applying specific actions (like an extra +10 points) to a specific link click requires wrapping that URL in a Custom Redirect and applying completion actions directly to that Custom Redirect."
            },
            {
                "id": "q49",
                "text": "Universal Containers wants to allow prospects to opt down from specific types of communications (e.g., Newsletters, Product Updates) rather than opting out of all emails completely. What Account Engagement feature must be configured and linked in their emails to support this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Unsubscribe Page"
                    },
                    {
                        "id": "B",
                        "text": "Email Preference Center"
                    },
                    {
                        "id": "C",
                        "text": "Profile"
                    },
                    {
                        "id": "D",
                        "text": "Dynamic Content"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- An Email Preference Center allows prospects to manage their subscriptions to various Public Lists. Linking to a preference center instead of a standard Unsubscribe page gives prospects the option to opt-down from specific topics rather than globally opting out of everything."
            },
            {
                "id": "q50",
                "text": "A marketing manager is reviewing an Email Template Report. They notice the 'Unique Clicks' metric is lower than the 'Total Clicks' metric. What does this difference indicate?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Some prospects forwarded the email to colleagues who then clicked the links."
                    },
                    {
                        "id": "B",
                        "text": "Some prospects clicked multiple different links or the same link multiple times within the email."
                    },
                    {
                        "id": "C",
                        "text": "The email was intercepted by spam filters that clicked the links automatically."
                    },
                    {
                        "id": "D",
                        "text": "The system failed to track the identity of some prospects who clicked the links."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- 'Unique Clicks' counts the number of distinct individual prospects who clicked at least one tracked link. 'Total Clicks' counts every single click event. If a prospect clicks three different links, or clicks the same link three times, it counts as 1 Unique Click and 3 Total Clicks. Engagement Studio"
            },
            {
                "id": "q51",
                "text": "[Scenario] Northern Trail Outfitters (NTO) has an active Engagement Program designed to nurture new leads. A marketer realizes that a critical email in the middle of the program contains incorrect pricing information. The marketer pauses the program to fix the email template. What happens to prospects who were on a \"Wait 3 days\" step when the program was paused?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The wait period pauses and resumes exactly where it left off when the program is restarted."
                    },
                    {
                        "id": "B",
                        "text": "The wait period continues in the background, and if the 3 days expire while paused, they immediately move to the next step when restarted."
                    },
                    {
                        "id": "C",
                        "text": "The wait period is reset to 0 days when the program is restarted, meaning they will wait a full 3 days from the restart time."
                    },
                    {
                        "id": "D",
                        "text": "The prospects skip the current wait step and immediately move to the next action when restarted."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- When an Engagement Program is paused, prospects remain exactly where they are, and wait periods are paused. For example, if a prospect is on day 1 of a 3-day wait step and the program is paused for 5 days, when restarted, the prospect will simply wait the remaining 2 days. The wait timer does not run in the background or reset."
            },
            {
                "id": "q52",
                "text": "[Scenario] Cloud Kicks wants to create an Engagement Program that checks if a prospect is a member of the \"VIP Customers\" list AND has a score greater than 100 before sending a special promotional email. Which feature in Engagement Studio should the Account Engagement Specialist use to achieve this efficiently in a single step?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Multiple Rule steps chained together in sequence."
                    },
                    {
                        "id": "B",
                        "text": "A Complex Rule step."
                    },
                    {
                        "id": "C",
                        "text": "A Custom Trigger step."
                    },
                    {
                        "id": "D",
                        "text": "An Action step configured to evaluate criteria."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- A Complex Rule allows marketers to evaluate multiple criteria (up to 5 conditions) within a single step using AND/OR logic. This is the most efficient way to check both list membership and score simultaneously without chaining multiple standard rule steps."
            },
            {
                "id": "q53",
                "text": "[Scenario] An Account Engagement Specialist is building an Engagement Program and adds an Email Trigger step to evaluate if a prospect clicked a specific link. The wait time on the trigger is set to \"Wait up to 5 days\". A prospect clicks the link on Day 2. When will the prospect proceed down the \"Yes\" path?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Immediately after clicking the link on Day 2."
                    },
                    {
                        "id": "B",
                        "text": "On Day 5, at the end of the specified wait period."
                    },
                    {
                        "id": "C",
                        "text": "On Day 7, accounting for processing time."
                    },
                    {
                        "id": "D",
                        "text": "The prospect will proceed down the \"No\" path because they did not wait the full 5 days."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- When a Trigger step uses the \"Wait up to X days\" setting, Account Engagement continuously listens for the specified action. If the prospect takes the action (in this case, clicking the link) before the maximum wait time expires, they are immediately moved down the \"Yes\" path. They do not wait for the remaining days to expire."
            },
            {
                "id": "q54",
                "text": "[Scenario] LenoxSoft has an Engagement Program nurturing cold leads. If a lead replies to any email or calls a sales rep, they are manually removed from the program's recipient list. A month later, a sales rep asks marketing to add a specific lead back into the exact same Engagement Program. What will happen when the lead is added back to the recipient list?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The lead will start the program over from the very beginning."
                    },
                    {
                        "id": "B",
                        "text": "The lead will resume the program at the exact step where they left off."
                    },
                    {
                        "id": "C",
                        "text": "The lead cannot be added back to an Engagement Program they were previously removed from."
                    },
                    {
                        "id": "D",
                        "text": "The lead will bypass all rules and jump directly to the last step of the program."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- If a prospect is removed from an Engagement Program recipient list and later added back, they do not start over. They will resume the program at the exact step they were on when they were removed. Account Engagement remembers their historical journey through that specific program."
            },
            {
                "id": "q55",
                "text": "[Scenario] Universal Containers wants to ensure their Engagement Program emails are only sent during their working hours (Monday to Friday, 9 AM to 5 PM) so sales reps can follow up promptly if a prospect engages. Which steps are required to configure this? (Select 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Enable the \"Send emails during business hours only\" checkbox in the Engagement Program's basic settings."
                    },
                    {
                        "id": "B",
                        "text": "Define the specific business days, hours, and time zone within the Engagement Program's basic settings."
                    },
                    {
                        "id": "C",
                        "text": "Add an Action step to \"Check Business Hours\" before every email send within the program's canvas."
                    },
                    {
                        "id": "D",
                        "text": "Configure the global business hours in Account Engagement Settings > Account Settings."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B"
                ],
                "explanation": "- Business hours are defined at the individual Engagement Program level, not globally in account settings. To use this feature, you must enable \"Send emails during business hours only\" in the program's basic settings and then specify the time zone, days of the week, and hours of the day within that same settings panel."
            },
            {
                "id": "q56",
                "text": "[Scenario] A marketer at AW Computing is testing a newly built Engagement Program before activating it. Which of the following capabilities does the testing feature in Engagement Studio provide? (Select 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Simulating the prospect journey by manually selecting \"Yes\" or \"No\" at each decision point."
                    },
                    {
                        "id": "B",
                        "text": "Selecting a specific test prospect from a list to see how their actual data routes them through the program."
                    },
                    {
                        "id": "C",
                        "text": "Viewing the exact calendar dates when a prospect would reach specific steps based on a chosen hypothetical start date."
                    },
                    {
                        "id": "D",
                        "text": "Sending test emails directly from the test canvas to a specified test list to check inbox rendering."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "C"
                ],
                "explanation": "- The testing tab in Engagement Studio is an interactive canvas that allows marketers to click through the \"Yes\" or \"No\" paths of triggers and rules to verify logic. It also populates simulated dates on each step based on a hypothetical start date you select. It does not use real prospect data or send actual test emails (testing emails is done within the email template builder)."
            },
            {
                "id": "q57",
                "text": "[Scenario] Get Cloudy Consulting wants to set up an Engagement Program that triggers an alert to the assigned user if a prospect clicks a specific Custom Redirect link provided in the first introductory email. If the prospect does not click the link within 7 days, their score should be decreased by 5. Which sequence of Engagement Studio steps should be used?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Action: Send Email -> Trigger: Custom Redirect Click (Wait up to 7 days) -> Yes Path: Action: Notify User -> No Path: Action: Adjust Score."
                    },
                    {
                        "id": "B",
                        "text": "Action: Send Email -> Rule: Custom Redirect Click (Wait 7 days) -> Yes Path: Action: Notify User -> No Path: Action: Adjust Score."
                    },
                    {
                        "id": "C",
                        "text": "Action: Send Email -> Wait step: 7 days -> Rule: Custom Redirect Click -> Yes Path: Action: Notify User -> No Path: Action: Adjust Score."
                    },
                    {
                        "id": "D",
                        "text": "Trigger: Custom Redirect Click (Wait up to 7 days) -> Action: Send Email -> Yes Path: Action: Notify User -> No Path: Action: Adjust Score."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- A Trigger step is specifically designed to listen for prospect actions (like a Custom Redirect Click, Email Open, or Form Submit) within a specified timeframe. If the action occurs, they go down the Yes path (Notify User). If the wait period expires without the action, they go down the No path (Adjust Score). Rules evaluate static criteria, while Triggers listen for behaviors."
            },
            {
                "id": "q58",
                "text": "[Scenario] Northern Trail Outfitters has a running Engagement Program that has been active for 3 months. A marketer adds 500 new prospects to the Dynamic List that feeds the program as the recipient list. How will the Engagement Program process these newly added prospects?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They will immediately jump to the step where the majority of current prospects are located."
                    },
                    {
                        "id": "B",
                        "text": "They will start the program from the beginning (Step 1)."
                    },
                    {
                        "id": "C",
                        "text": "They will be held in a waiting queue until the program is paused and restarted."
                    },
                    {
                        "id": "D",
                        "text": "The program will automatically create a separate version path for the new prospects."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- When new prospects are added to the recipient list of a running Engagement Program, they simply enter the program at the very beginning and start at the first step. They do not skip ahead to catch up with older prospects."
            },
            {
                "id": "q59",
                "text": "[Scenario] A marketer wants to use an Engagement Program to assign prospects to different sales queues based on their Industry. They want to check if the Industry field is \"Technology\", \"Healthcare\", or \"Finance\" and route them to three separate assignment actions. If it's none of these, they should go to a general queue. What is the most efficient way to build this logic in Engagement Studio?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use a single Complex Rule step checking for all three industries with OR logic, then route to queues."
                    },
                    {
                        "id": "B",
                        "text": "Use a series of Rule steps chained together on the \"No\" paths to evaluate each industry sequentially."
                    },
                    {
                        "id": "C",
                        "text": "Use a Trigger step to evaluate the prospect's Industry field value upon entry."
                    },
                    {
                        "id": "D",
                        "text": "Use a single Rule step with the \"contains\" operator to check for multiple values simultaneously and output multiple branches."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Because a Complex Rule only yields a single Yes/No outcome, it cannot route prospects to three distinct assignment actions based on three different industry values. The correct approach is to use a standard Rule step checking for \"Technology\". The Yes path assigns to the Tech queue. The No path leads to another Rule step checking for \"Healthcare\", and so on."
            },
            {
                "id": "q60",
                "text": "[Scenario] An Account Engagement Specialist needs to update a live Engagement Program by adding a new \"Add to CRM Campaign\" action step immediately after the first email send. The program has been running for weeks and many prospects have already passed this point. What happens to the prospects who have already completed the first email step when the program is paused, the new step is added, and the program is restarted?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They will be routed back to the new step and added to the CRM campaign."
                    },
                    {
                        "id": "B",
                        "text": "They will continue forward from their current location and will NOT retroactively hit the newly added step."
                    },
                    {
                        "id": "C",
                        "text": "The program will fail to restart because structural changes cannot be made to active programs once prospects have entered."
                    },
                    {
                        "id": "D",
                        "text": "They will be temporarily paused while the system runs a historical sync to update their campaign status."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Prospects only move forward in an Engagement Program. If you pause a program and add a new step above where prospects currently are, the prospects will not go backwards to experience that new step. They will simply resume from their current location and continue forward."
            }
        ]
    },
    {
        "id": "exam_10",
        "title": "Salesforce Exam 4",
        "questions": [
            {
                "id": "q1",
                "text": "A company uses a third-party webinar tool that doesn't natively integrate with Account Engagement. They import a list of 500 attendees via a CSV file, mapping the email address and webinar attendance status to a custom field. 200 of these email addresses already exist as Prospects in Account Engagement, and 300 are new. During the import, the administrator accidentally forgets to check the 'Un-delete matching prospects found in the recycle bin during this import' box. What will happen to the imported records?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The 200 existing prospects will be updated, but the 300 new records will be rejected."
                    },
                    {
                        "id": "B",
                        "text": "All 500 records will be imported, but if any of the 200 existing prospects were in the recycle bin, they will not be updated and remain in the recycle bin."
                    },
                    {
                        "id": "C",
                        "text": "If any of the existing prospects are in the recycle bin, they will be un-deleted automatically because it's a CSV import."
                    },
                    {
                        "id": "D",
                        "text": "New prospects will be created, existing active prospects will be updated, but updates to prospects in the recycle bin will be ignored without un-deleting them."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "conditional Completion Action on the Custom Redirect with the condition Score is greater than 50., An Automation Rule with the criteria: Prospect has clicked Custom Redirect AND Prospect score is greater than 50., An Engagement Studio Program that listens for the Custom Redirect click and uses a Rule node to check the score before assigning. Explanation: Conditional Completion Actions, Automation Rules, and Engagement Studio programs can all evaluate these criteria and perform the assignment. Segmentation Rules are for one-time list building, not ongoing assignments. 4. The prospect is automatically un-deleted from the Recycle Bin and the click is recorded on their activity history. Explanation: If a deleted prospect clicks a tracked link in an Account Engagement email or submits an Account Engagement form, they are automatically un-deleted from the Recycle Bin, and the activity is recorded. 5. It uses specific, fixed triggers (like form submission, assignment, and opportunity creation) to move prospects through the predefined lifecycle stages. Explanation: The default Account Engagement Lifecycle Report has predefined stages (Visitor, Prospect, MQL, SQL, Won Opportunity) that are driven by specific system actions (like creating a prospect, assigning a prospect, and associating an opportunity), not by custom field values or statuses synced from Salesforce. 6. Enable Marketing Data Sharing rules and specify criteria (e.g., Region = Europe) for the Lead object in the European BU., Pause the Salesforce connector in the European BU before configuring Marketing Data Sharing rules. Explanation: To use Marketing Data Sharing rules, you must pause the Salesforce connector first, then define the criteria (such as a specific field value) to control which records sync to which Business Unit. 7. Create a custom user role by copying the Marketing role and enabling the 'Import Prospects' permission. Explanation: Default roles in Account Engagement cannot be edited directly. To grant specific permissions not included in a default role, an administrator must create a Custom User Role (by copying an existing default role) and adjust the permissions. 8. The Account Engagement sync is severed. If the Salesforce record is later updated, it will not un-delete the Account Engagement prospect. Explanation: Sending a prospect to the Account Engagement Recycle Bin stops the sync with Salesforce. Unlike a prospect clicking an email, an update to the synced record in Salesforce will NOT un-delete a prospect from the Account Engagement Recycle Bin. 9. Create a separate tracker domain for each root domain in Account Engagement., Generate and implement the specific tracking code associated with each respective tracker domain on its corresponding root domain. Explanation: With First-Party tracking, you must set up a separate Tracker Domain for each root domain you want to track. Furthermore, you must place the specific tracking code generated for that specific Tracker Domain onto the corresponding website. 10. Use the Account Engagement API to issue a permanent delete command for those prospect IDs. Explanation: Permanent deletion of prospects (to fully comply with GDPR) cannot be done directly via the Account Engagement user interface. It requires using the Account Engagement API to perform a permanent delete. 11. The Account Engagement value remains 'Red' because Salesforce blank values do not overwrite existing Account Engagement values by default. Explanation: By default, a blank or null value in Salesforce will NOT overwrite an existing value in Account Engagement, even if the sync behavior is set to 'Use Salesforce's Value'. To allow blank values to overwrite, the administrator must enable the specific connector setting to overwrite blank values. 12. Assign the B2B Marketing Analytics permission set license and permission set to the VP., Share the B2BMA app (folder) in Analytics Studio with the VP. Explanation: To access B2BMA dashboards in Salesforce, users need the appropriate Permission Set License and Permission Set assigned to them. Additionally, the Analytics app or folder containing the dashboards must be shared with them in CRM Analytics (Analytics Studio)."
            },
            {
                "id": "q2",
                "text": "A prospect clicks a link in a Pardot email, but the click doesn't increase their score. The link was a direct link to a PDF hosted externally. Which of the following explains this behavior?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Clicks on external PDFs must be set up as Custom Redirects to be scored."
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement automatically tracks all PDF clicks regardless of hosting."
                    },
                    {
                        "id": "C",
                        "text": "The prospect's email client previewed the link, invalidating the score."
                    },
                    {
                        "id": "D",
                        "text": "Scoring rules for emails only apply to HTML page links, not files."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "If Kiosk/Data Entry mode is not enabled, Pardot will track the browser cookie and associate all subsequent form submissions on that device with the first prospect who filled out the form, causing data to be overwritten. Enabling Kiosk Mode stops Pardot from tracking the visitor cookie for subsequent submissions."
            },
            {
                "id": "q3",
                "text": "A marketing team wants to automatically assign prospects to the sales team only when the prospect has viewed a specific product video on their website AND has a score greater than 50. The product video is embedded using a third-party player, but they have a Custom Redirect pointing to the video page. Which automation tools are suited for this? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "A conditional Completion Action on the Custom Redirect with the condition Score is greater than 50."
                    },
                    {
                        "id": "B",
                        "text": "An Automation Rule with the criteria: Prospect has clicked Custom Redirect AND Prospect score is greater than 50."
                    },
                    {
                        "id": "C",
                        "text": "A Segmentation Rule that checks for Custom Redirect click and Score > 50, assigning the prospect."
                    },
                    {
                        "id": "D",
                        "text": "An Engagement Studio Program that listens for the Custom Redirect click and uses a Rule node to check the score before assigning."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "D"
                ],
                "explanation": "Progressive Profiling relies on Pardot recognizing the prospect (via tracking cookie) to know which fields they have already completed. Therefore, cookies must be enabled and the prospect must be identified. Progressive fields are typically set to appear conditionally based on data already gathered."
            },
            {
                "id": "q4",
                "text": "A B2B company has a long sales cycle. A prospect becomes inactive and hasn't interacted with any marketing materials for 2 years. They are sent to the Account Engagement Recycle Bin to save database limits. Three months later, the prospect clicks a link in an old marketing email they found in their inbox. What is the outcome?",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect remains in the Recycle Bin and the click is not recorded."
                    },
                    {
                        "id": "B",
                        "text": "The prospect is automatically un-deleted from the Recycle Bin and the click is recorded on their activity history."
                    },
                    {
                        "id": "C",
                        "text": "A new prospect record is created and the click is recorded there."
                    },
                    {
                        "id": "D",
                        "text": "The click is recorded as an anonymous visitor until they fill out a form."
                    }
                ],
                "correctAnswers": [
                    "B",
                    "C",
                    "E"
                ],
                "explanation": "Pardot Form Handlers do not have built-in CAPTCHA or Bot Protection settings (those features are exclusively for native Pardot Forms). To prevent spam on form handlers, you must implement spam prevention on the external form itself, such as third-party CAPTCHA, honeypot fields, or Javascript validation."
            },
            {
                "id": "q5",
                "text": "You are analyzing a prospect's record and notice their prospect stage is 'MQL'. However, your organization's default lifecycle report doesn't seem to reflect this transition. Which of the following is a key characteristic of the default Account Engagement Lifecycle Report?",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "It relies strictly on custom prospect fields to move prospects between stages."
                    },
                    {
                        "id": "B",
                        "text": "It uses specific, fixed triggers (like form submission, assignment, and opportunity creation) to move prospects through the predefined lifecycle stages."
                    },
                    {
                        "id": "C",
                        "text": "It allows administrators to rename and add custom stages to match their exact business process."
                    },
                    {
                        "id": "D",
                        "text": "It updates stages based on Lead Status field changes synced from Salesforce."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B"
                ],
                "explanation": "Dependent fields only function if the controlling field is a Dropdown or Radio button. Furthermore, the trigger value established in the dependent field settings must exactly match the value submitted by the controlling field."
            },
            {
                "id": "q6",
                "text": "A company is setting up a new business unit (BU) in Account Engagement Advanced edition. They want to ensure that leads assigned to the European sales team in Salesforce only sync to the European BU. What must the administrator configure to achieve this? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Enable Marketing Data Sharing rules and specify criteria (e.g., Region = Europe) for the Lead object in the European BU."
                    },
                    {
                        "id": "B",
                        "text": "Pause the Salesforce connector in the European BU before configuring Marketing Data Sharing rules."
                    },
                    {
                        "id": "C",
                        "text": "Create a custom connector user in Salesforce with a profile that only has access to European lead records."
                    },
                    {
                        "id": "D",
                        "text": "Map the 'Region' field on the prospect record to be the sync key between the BU and Salesforce."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Editing the Layout Template will affect all assets using that template. To apply CSS specific only to one particular form, the best practice is to add a"
            },
            {
                "id": "q7",
                "text": "A user with the Marketing role in Account Engagement needs to be able to import prospects. By default, the Marketing role does not have this permission. How should the Account Engagement administrator grant this permission without giving the user full Administrator access?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Change the user's role to Administrator."
                    },
                    {
                        "id": "B",
                        "text": "Create a custom user role by copying the Marketing role and enabling the 'Import Prospects' permission."
                    },
                    {
                        "id": "C",
                        "text": "Edit the default Marketing role directly to check the 'Import Prospects' box."
                    },
                    {
                        "id": "D",
                        "text": "Ask Salesforce Support to enable the permission for that specific user."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "In a Pardot Form Handler, you can define a 'Success Location' and an 'Error Location'. Setting the Error Location to the referring URL allows the external form to handle and display the error parameters returned by Pardot via query string."
            },
            {
                "id": "q8",
                "text": "An administrator notices that the Account Engagement database is nearing its contact limit. They decide to clean up the database by sending old, inactive prospects to the Recycle Bin. What will happen to the Salesforce Lead or Contact records associated with these deleted prospects?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The associated Lead or Contact records in Salesforce are also deleted."
                    },
                    {
                        "id": "B",
                        "text": "The Account Engagement sync is paused for those records, but the Salesforce records remain unaffected. If the Salesforce record is updated, the Account Engagement prospect is un-deleted."
                    },
                    {
                        "id": "C",
                        "text": "The Account Engagement sync is severed. If the Salesforce record is later updated, it will not un-delete the Account Engagement prospect."
                    },
                    {
                        "id": "D",
                        "text": "The Account Engagement prospect is moved to the Recycle Bin, and a flag is sent to Salesforce to hide the Account Engagement Visualforce page on those records."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "If a landing page is in Draft status, its URL (including the vanity URL) will not be publicly accessible and will return a 404 error. The page must be published for the vanity URL to resolve."
            },
            {
                "id": "q9",
                "text": "Your marketing team wants to start tracking visitors across multiple distinct domains that your company owns (e.g., brandA.com and brandB.com). What configuration steps are necessary to implement First-Party tracking across these multiple root domains? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Create a separate tracker domain for each root domain in Account Engagement."
                    },
                    {
                        "id": "B",
                        "text": "Place the exact same Account Engagement tracking code on all root domains, regardless of the tracker domain."
                    },
                    {
                        "id": "C",
                        "text": "Generate and implement the specific tracking code associated with each respective tracker domain on its corresponding root domain."
                    },
                    {
                        "id": "D",
                        "text": "Enable 'Track multiple root domains' in the Account Engagement Settings."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Form Completion Actions trigger immediately upon successful form submission. While Automation Rules could do this, they do not run immediately (they poll continuously). Landing pages do not have completion actions for form submissions, only for page views."
            },
            {
                "id": "q10",
                "text": "An Account Engagement Administrator needs to permanently delete 500 prospects to comply with a GDPR 'Right to be Forgotten' request. They have already moved these prospects to the Account Engagement Recycle Bin. What is the correct next step to permanently delete them?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Select the prospects in the Recycle Bin and choose the 'Empty Recycle Bin' table action."
                    },
                    {
                        "id": "B",
                        "text": "Use the Account Engagement API to issue a permanent delete command for those prospect IDs."
                    },
                    {
                        "id": "C",
                        "text": "The prospects will automatically be permanently deleted from the Recycle Bin after 30 days."
                    },
                    {
                        "id": "D",
                        "text": "It is not possible to permanently delete prospects; they must remain in the Recycle Bin indefinitely."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "When a prospect clicks a tracked link in a Pardot email, their cookie is recognized and they are identified. Native Pardot forms will automatically pre-fill with the prospect's existing data as long as the prospect is tracked and 'Do not prefill' is not checked on the field level."
            },
            {
                "id": "q11",
                "text": "You have set up a new Custom Prospect Field in Account Engagement and mapped it to a Custom Field on the Contact object in Salesforce. You set the sync behavior to 'Use Salesforce's Value'. A prospect has the value 'Red' in Account Engagement. The synced Contact in Salesforce has a blank (null) value for this field. When a sync occurs, what happens to the value in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The Account Engagement value changes to blank (null)."
                    },
                    {
                        "id": "B",
                        "text": "The Account Engagement value remains 'Red' because Salesforce blank values do not overwrite existing Account Engagement values by default."
                    },
                    {
                        "id": "C",
                        "text": "The sync fails due to a data conflict."
                    },
                    {
                        "id": "D",
                        "text": "The Salesforce value is updated to 'Red'."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "If a Pardot field is mapped to a restricted picklist in Salesforce, the data submitted via the form must match the exact Salesforce API Name of the picklist value. If it does not match, the sync will fail due to invalid picklist value."
            },
            {
                "id": "q12",
                "text": "Your organization recently implemented B2B Marketing Analytics (B2BMA). The VP of Marketing is complaining that they cannot see the B2BMA dashboards in their Salesforce environment. What are the necessary steps an Administrator must take to ensure the VP can access these dashboards? (Select all that apply)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Assign the B2B Marketing Analytics permission set license and permission set to the VP."
                    },
                    {
                        "id": "B",
                        "text": "Share the B2BMA app (folder) in Analytics Studio with the VP."
                    },
                    {
                        "id": "C",
                        "text": "Make the VP an Administrator in Account Engagement."
                    },
                    {
                        "id": "D",
                        "text": "Upgrade the VP's Salesforce license to an Analytics Cloud Builder license."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "In Pardot forms, if a dependent field is filled out and then hidden because the controlling field changes, the data previously entered in the dependent field is STILL submitted with the form. To prevent this, custom Javascript is often required to clear hidden fields upon submission."
            },
            {
                "id": "q13",
                "text": "A marketing team is hosting a booth at a trade show and using a native Pardot Form on an iPad to capture leads. After the event, the team notices that multiple leads have been merged into a single prospect record and data has been overwritten. What is the most likely cause and the best solution for this scenario?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The form has 'Always display form after submission' unchecked. Check this option."
                    },
                    {
                        "id": "B",
                        "text": "Kiosk/Data Entry Mode is not enabled. Enable Kiosk/Data Entry Mode on the form to prevent tracking the prospect's cookie."
                    },
                    {
                        "id": "C",
                        "text": "The form handler needs to be used instead of a Pardot form for offline events."
                    },
                    {
                        "id": "D",
                        "text": "Multiple prospects cannot have the same email address in the account."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Pardot's Multivariate Testing feature for Landing Pages allows you to test different content blocks, including embedding different forms into different variations of the same landing page, to determine which combination drives the highest conversion rate. 25. D+ Explanation: Grading in Account Engagement moves in 1/3 increments (e.g., D, D+, C-, C, C+). Starting at D, a +2/3 increase moves the grade to D+, then C-. The subsequent -1/3 decrease brings the grade back down to D+. 26. Automation Rule Explanation: Automation Rules have an action to 'Adjust prospect score' and can set the score to a specific absolute value (e.g., 'to 0'). Dynamic Lists and Segmentation Rules cannot alter scores to specific absolute values, and Completion Actions are based on real-time activity, not inactivity. 27. Create an Automation Rule with criteria: State = TX, Score > 100. Action: Assign to queue 'Southwest Sales'. Explanation: Automation Rules evaluate criteria continuously and can execute actions like assigning to a specific Salesforce queue. Segmentation Rules run once and don't automatically process new prospects. Dynamic Lists cannot have Completion Actions directly attached to them. 28. The colleague's prospect record might be updated with the activity of the person who clicked the link., A visitor cookie is placed on the browser of the person who clicked, potentially associating their future browsing with the colleague's prospect record. Explanation: When a tracked link is clicked from a forwarded email, Account Engagement assumes the original recipient is clicking it. It cookies the new browser and associates it with the original recipient's prospect record, causing their activities to be logged on the wrong record. 29. Assign the prospect to the Salesforce active assignment rule using an Account Engagement Automation Rule action. Explanation: Account Engagement automation rules have a specific action 'Assign to Salesforce active assignment rule'. This is the best practice when complex routing logic already exists in Salesforce, preventing duplication of effort and ensuring consistency. 30. 490 of the clicks were from visitors who have not yet been identified as prospects (they are anonymous visitors). Explanation: Custom redirects track all clicks (visitors), but the table only displays identified prospects. Anonymous visitors will be counted in the total/unique clicks, but will not appear as prospects until they convert and their visitor ID is associated with a prospect record. 31. Create a Custom Redirect for the PDF link, and add a Completion Action to add the prospect to the Salesforce campaign., Put the PDF behind an Account Engagement Form, and add a Completion Action to the Form to add the prospect to the Salesforce campaign. Explanation: You cannot add Completion Actions directly to Account Engagement Files. To track file downloads and trigger real-time actions, you must either gate the file behind a Form/Form Handler or use a Custom Redirect that links to the file. 32. John Doe, because Completion Actions execute before Automation Rules. Explanation: Account Engagement processes automation in a specific order. Completion actions fire immediately upon the prospect's action (like form submission). Automation rules run in the background shortly after. Since the prospect is already assigned to John Doe by the Completion Action, the Automation Rule will not reassign them (unless specifically configured to allow reassignment). 33. Create an Automation Rule: If Prospect custom field [Lead Status] is 'Disqualified', Action: 'Do not email'., Create a Dynamic List: If Prospect custom field [Lead Status] is 'Disqualified'. Instruct the team to use this list as a Suppression List on all email sends. Explanation: Using an Automation Rule to set 'Do not email' is a system-wide block, which is highly robust. Using a Dynamic List as a suppression list also works well, provided it is consistently applied to all sends. Mapping to 'Opted Out' is improper use of that field, and Segmentation Rules require manual execution."
            },
            {
                "id": "q14",
                "text": "A company wants to use Progressive Profiling to collect more data about prospects over time without making forms too long. Which two conditions must be met for Progressive Profiling to function correctly on a Pardot Form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect must have cookies enabled in their browser."
                    },
                    {
                        "id": "B",
                        "text": "The form must be embedded in an external website, not a Pardot Landing Page."
                    },
                    {
                        "id": "C",
                        "text": "The fields set for progressive profiling must not be marked as required."
                    },
                    {
                        "id": "D",
                        "text": "The prospect must have previously submitted a form or been identified by Pardot tracking."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Completion Action on a Page Action for a frequently visited page is set to 'Notify assigned user'. Explanation: Page Actions fire every time the specific page is viewed. If a Completion Action to 'Notify assigned user' is attached to a Page Action for a high-traffic page, the rep will receive a notification on every single view. 35. Create two separate Profile criteria: 'Job Title - Director' (weight 1/3) and 'Job Title - Executive' (weight 2/3). Use Automation Rules to match the criteria. Explanation: Profile criteria in Account Engagement apply a specific, static weight (+1/3, +2/3, etc.). To apply different weights for different values of the same field, you must create distinct Profile criteria for each weight level and use Automation Rules to apply the prospect to the appropriate criteria. 36. Manually edit the score directly on the prospect's record., Create an Automation Rule to 'Adjust prospect score' by a negative amount. Explanation: You can manually edit a prospect's score directly on their record, or use an Automation Rule to adjust it (e.g., -50). Individual activities cannot be deleted from a prospect's history to recalculate the score. 37. Create an Automation Rule: Criteria = Form [Contact Us] successful AND Score > 100. Action = Change prospect custom field [Lead Priority] to 'High'. Map this field to Salesforce and filter the List View by it. Explanation: The most robust way to flag prospects for specific Salesforce List Views based on complex Account Engagement criteria is to use an Automation Rule to stamp a custom field value (e.g., 'High Priority'). That field syncs to Salesforce, where a List View can easily filter on it. 38. Use the native Wistia connector for Account Engagement to track video plays and assign scoring rules based on video engagement. Explanation: Native Account Engagement tracking (Page Actions, Custom Redirects) cannot track interactions within an embedded third-party video player. To track video engagement (plays, percent watched) and trigger scoring, an integration like the native Wistia connector is required."
            },
            {
                "id": "q15",
                "text": "A company uses a Pardot Form Handler integrated with a highly trafficked existing website form. Recently, they have seen a massive spike in spam submissions. What are valid strategies to reduce spam on a Pardot Form Handler?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Add a built-in Pardot CAPTCHA to the Form Handler."
                    },
                    {
                        "id": "B",
                        "text": "Add a honeypot field to the external form and reject submissions where this field is filled."
                    },
                    {
                        "id": "C",
                        "text": "Implement a third-party CAPTCHA (like reCAPTCHA) on the external form before submitting to Pardot."
                    },
                    {
                        "id": "D",
                        "text": "Enable Pardot's Bot Protection feature specifically on the Form Handler settings."
                    },
                    {
                        "id": "E",
                        "text": "E. Use Javascript on the external form to validate data before sending it to the Form Handler endpoint."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Operational emails are used for critical system notifications, transactional messages, or updates that do not contain marketing material. Checking the 'Operational Email' setting allows the email to bypass the opt-out status. Removing an unsubscribe link from a marketing email violates CAN-SPAM and Account Engagement policies."
            },
            {
                "id": "q16",
                "text": "A marketer is creating a native Pardot Form and wants to ask for a 'State' only if the prospect selects 'United States' as their 'Country'. They set up a Dependent Field, but during testing, the State field never appears. What are possible reasons for this configuration failure?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The Country field type is set to Text instead of Dropdown or Radio Button."
                    },
                    {
                        "id": "B",
                        "text": "The trigger value in the dependent setup is 'USA', but the dropdown option in the Country field is 'United States'."
                    },
                    {
                        "id": "C",
                        "text": "Progressive profiling is enabled on the form, which overrides dependent fields."
                    },
                    {
                        "id": "D",
                        "text": "The State field is marked as required on the prospect field level."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "In Account Engagement, if an A/B test results in a tie based on the chosen criteria (opens or clicks), Version A is defaulted as the winner and sent to the remaining portion of the audience."
            },
            {
                "id": "q17",
                "text": "A web designer needs to apply custom CSS to a specific native Pardot Form to match the company branding for a single campaign. Where is the most appropriate place to add this CSS so it affects the form specifically, without modifying the underlying layout template used by other assets?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "In the 'Form' tab of the Layout Template."
                    },
                    {
                        "id": "B",
                        "text": "In the section of the Layout Template."
                    },
                    {
                        "id": "C",
                        "text": "In the Look and Feel -> Above Form section of the Form wizard, using a"
                    },
                    {
                        "id": "D",
                        "text": "In the CSS tab of the Landing Page where the form is embedded."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Account Engagement's Reply Tracking feature is designed to filter out most out-of-office (OOO) auto-responders so that they do not falsely inflate reply metrics. They are not recorded as bounces."
            },
            {
                "id": "q18",
                "text": "A company uses a Pardot Form Handler. They want prospects to be redirected to a specific 'Thank You' page if the submission is successful, but redirected back to the original form page with an error parameter if there is a data validation error (e.g., invalid email). How should this be configured?",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Set the 'Success Location' to the Thank You page and the 'Error Location' to the referring URL."
                    },
                    {
                        "id": "B",
                        "text": "Check 'Enable data forwarding' to pass error codes to the success page."
                    },
                    {
                        "id": "C",
                        "text": "Pardot Form Handlers handle errors automatically by displaying default error messages on a Pardot-hosted page."
                    },
                    {
                        "id": "D",
                        "text": "You cannot set an Error Location on a Pardot Form Handler."
                    }
                ],
                "correctAnswers": [
                    "B",
                    "C"
                ],
                "explanation": "For a list to be visible on an Email Preference Center, it must be marked as a 'Public List'. Additionally, it must be explicitly associated with that specific EPC page. Dynamic lists cannot be public lists."
            },
            {
                "id": "q19",
                "text": "A marketer creates a Pardot Landing Page for a new campaign and assigns it the vanity URL www.company.com/spring-campaign. However, when users visit that URL, they see a 404 error, even though www.company.com is verified as a tracker domain in Pardot. What is the most likely reason?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The Landing Page is still in Draft status."
                    },
                    {
                        "id": "B",
                        "text": "Vanity URLs can only be used for files, not landing pages."
                    },
                    {
                        "id": "C",
                        "text": "The campaign associated with the landing page is inactive."
                    },
                    {
                        "id": "D",
                        "text": "The tracker domain SSL certificate has expired."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Account Engagement automatically rewrites and tracks all standard URLs starting with http:// or https:// in an email. Using Custom Redirects inside Account Engagement emails is not recommended because the system tries to rewrite the custom redirect URL, which can break the link or cause tracking issues."
            },
            {
                "id": "q20",
                "text": "A prospect submits a form embedded on a Pardot Landing page. The marketer wants to assign the prospect to a specific user and add them to a Salesforce campaign. Which feature should be used to accomplish this immediately upon submission?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Form Handler Completion Actions"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Form Completion Actions"
                    },
                    {
                        "id": "D",
                        "text": "Landing Page Completion Actions"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "When creating Dynamic Content, a user must specify Default Content. If a prospect's data does not match any of the defined variations, they will be shown this Default Content."
            },
            {
                "id": "q21",
                "text": "A company sends a Pardot email to existing prospects containing a link to a Pardot Landing Page with a Pardot Form. They want the form fields to be pre-filled with the prospect's existing data (First Name, Last Name, Email). How is this achieved?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Append merge fields to the URL in the email (e.g., ?firstname={{First_Name}})."
                    },
                    {
                        "id": "B",
                        "text": "It happens automatically because the email link contains tracked parameters that identify the prospect."
                    },
                    {
                        "id": "C",
                        "text": "Javascript must be added to the Landing Page to fetch the prospect data via the Pardot API."
                    },
                    {
                        "id": "D",
                        "text": "Check the 'Pre-fill field' checkbox on each individual form field setting."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "If a prospect hard bounces, and later their email address is updated in Account Engagement or via sync with Salesforce, Account Engagement automatically resets the bounce count and removes the hard bounce flag, making the prospect mailable again."
            },
            {
                "id": "q22",
                "text": "A marketer creates a custom field 'Industry' in Pardot and maps it to a Salesforce restricted picklist. On the Pardot Form, the field is set up as a Text field. A prospect types 'tech' instead of selecting the exact picklist value 'Technology'. What is the expected behavior when the record syncs to Salesforce?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The sync will fail with a picklist value error since 'tech' is not a valid picklist value in Salesforce."
                    },
                    {
                        "id": "B",
                        "text": "Pardot will automatically map 'tech' to the closest matching picklist value 'Technology'."
                    },
                    {
                        "id": "C",
                        "text": "Salesforce will create a new picklist value called 'tech' automatically."
                    },
                    {
                        "id": "D",
                        "text": "The Pardot value 'tech' will overwrite the Salesforce picklist value, regardless of validity."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Account Engagement has a native setting under Account Settings to enable a Two-Click Unsubscribe page. This helps prevent anti-spam scanners from inadvertently opting prospects out when scanning email links."
            },
            {
                "id": "q23",
                "text": "A native Pardot form uses dependent fields. If 'Do you have a budget?' (Yes/No) is 'Yes', then 'Budget Amount' (Text) appears. A prospect selects 'Yes', enters '$10,000', but before submitting, changes the first question to 'No'. The 'Budget Amount' field disappears. What happens to the '$10,000' value when the form is submitted?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The value '$10,000' is submitted to Pardot and saved on the prospect record."
                    },
                    {
                        "id": "B",
                        "text": "The value '$10,000' is cleared and a null value is submitted for the Budget Amount field."
                    },
                    {
                        "id": "C",
                        "text": "The form submission fails due to a data conflict."
                    },
                    {
                        "id": "D",
                        "text": "The Budget Amount field retains '$10,000' only if the field is mapped to Salesforce."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "When a trigger or rule evaluation is set to 'Up to X days', the system listens continuously. As soon as the prospect takes the action (clicks the link), they immediately advance down the 'Yes' path. If they do not take the action by the end of the specified period, they advance down the 'No' path."
            },
            {
                "id": "q24",
                "text": "A marketing team wants to test two entirely different variations of a form on a Pardot Landing Page to see which converts better. What is the most efficient way to set this up natively in Pardot?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create two separate forms, embed them on two separate landing pages, and use an external A/B testing tool."
                    },
                    {
                        "id": "B",
                        "text": "Create a Multivariate Test on the Landing Page, and insert Form A in variation 1, and Form B in variation 2."
                    },
                    {
                        "id": "C",
                        "text": "Use Form Handlers on the Landing Page and randomly rotate the post URL via Javascript."
                    },
                    {
                        "id": "D",
                        "text": "You cannot test two different forms on a Pardot Landing Page."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The correct hierarchy to achieve this is: First, 'Account Owner'. If none exists, fallback to 'Assigned User'. If none exists, fallback to 'Specific User' (which would be marketing@company.com)."
            },
            {
                "id": "q25",
                "text": "Scenario: You have a baseline grading profile. A prospect matches the criteria for 'Industry = Healthcare' (which provides a +2/3 letter grade increase) but also matches the criteria for 'Company Size < 50' (which provides a -1/3 letter grade decrease). If the prospect started with a baseline grade of D, what is their new grade?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "C-"
                    },
                    {
                        "id": "B",
                        "text": "D+"
                    },
                    {
                        "id": "C",
                        "text": "C"
                    },
                    {
                        "id": "D",
                        "text": "D"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Account Engagement integrates with Litmus to provide the 'Render' or Advanced Email Analytics feature, which generates previews of exactly how the email will look across various email clients, browsers, and devices."
            },
            {
                "id": "q26",
                "text": "Scenario: A marketing user wants to reset the score of all prospects who have been inactive for more than 365 days to exactly zero, so they can be re-nurtured from scratch. Which feature should be used to achieve this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "B",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Completion Action"
                    },
                    {
                        "id": "D",
                        "text": "Segmentation Rule"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Account Engagement requires a deliberate double opt-in for prospects who have previously unsubscribed. If the 'Overwrite Prospect Opted Out field' setting is not configured to allow forms to overwrite it, the standard process is to set up an automated resubscribe email (using completion actions or automation rules) containing a resubscribe link. When they click it, their opt-out status is removed. (Strictly speaking, the feature 'Resubscribe' provides an automated email with a link if they try to fill out a form while opted out, based on Account Settings)."
            },
            {
                "id": "q27",
                "text": "Scenario: You are setting up Lead Routing. You want prospects from Texas to be assigned to the 'Southwest Sales' queue in Salesforce, but only if they have a score greater than 100. How can this be accomplished most efficiently?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create an Automation Rule with criteria: State = TX, Score > 100. Action: Assign to queue 'Southwest Sales'."
                    },
                    {
                        "id": "B",
                        "text": "Create a Segmentation Rule with criteria: State = TX, Score > 100. Action: Assign to queue 'Southwest Sales'."
                    },
                    {
                        "id": "C",
                        "text": "Create a Dynamic List with criteria: State = TX, Score > 100. Add a Completion Action to the list to assign to the queue."
                    },
                    {
                        "id": "D",
                        "text": "Use the Salesforce Connector's default routing rules."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "For 'Wait up to' periods on triggers, the prospect is evaluated continuously. As soon as the action (click) occurs, they immediately progress down the 'Yes' path. They do not wait for the remainder of the time period."
            },
            {
                "id": "q28",
                "text": "Scenario: A prospect accidentally clicked a link in an email that was forwarded to them by a colleague. The link was a tracked Account Engagement link. What are the potential consequences of this action, assuming strict visitor association settings are not enabled?",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "The colleague's prospect record might be updated with the activity of the person who clicked the link."
                    },
                    {
                        "id": "B",
                        "text": "A new prospect record is immediately created for the person who clicked the forwarded link."
                    },
                    {
                        "id": "C",
                        "text": "A visitor cookie is placed on the browser of the person who clicked, potentially associating their future browsing with the colleague's prospect record."
                    },
                    {
                        "id": "D",
                        "text": "The email bounce rate for that campaign will increase."
                    }
                ],
                "correctAnswers": [
                    "B",
                    "D"
                ],
                "explanation": "When configuring repeatable Engagement Programs, you must define a waiting period (in days) before a prospect is eligible to re-enter the program. You can also optionally limit the total number of times a prospect can repeat the entire program. You cannot specify that they only repeat specific steps."
            },
            {
                "id": "q29",
                "text": "Scenario: You need to implement a complex lead assignment model where leads are assigned round-robin to a group of 5 sales reps, but only if the lead is in the 'Enterprise' territory. The sales team already has sophisticated assignment rules built in Salesforce for this exact logic. What is the best practice for Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Recreate the assignment rules in Account Engagement using multiple Automation Rules."
                    },
                    {
                        "id": "B",
                        "text": "Use Account Engagement to assign all 'Enterprise' leads to a generic 'Unassigned' User, then let Salesforce Assignment Rules take over."
                    },
                    {
                        "id": "C",
                        "text": "Assign the prospect to the Salesforce active assignment rule using an Account Engagement Automation Rule action."
                    },
                    {
                        "id": "D",
                        "text": "Create an Account Engagement User Group with the 5 reps and use an Automation Rule to assign to that group."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "When a program is paused and edited, prospects currently on a wait step will simply resume their wait from where they left off once the program is unpaused. After completing their original wait period, they will proceed to the next newly added step in the path."
            },
            {
                "id": "q30",
                "text": "Scenario: Your company uses a Custom Redirect to track clicks on a banner ad placed on a third-party partner website. You notice the Custom Redirect report shows 500 unique clicks, but only 10 prospects are listed in the table below the report. What is the most likely reason for this discrepancy?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The Custom Redirect completion actions failed to fire for 490 clicks."
                    },
                    {
                        "id": "B",
                        "text": "490 of the clicks were from visitors who have not yet been identified as prospects (they are anonymous visitors)."
                    },
                    {
                        "id": "C",
                        "text": "The tracking code is missing from the third-party partner website."
                    },
                    {
                        "id": "D",
                        "text": "The Custom Redirect link was formatted incorrectly in the banner ad."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "If a prospect reaches an action step (like sending an email) outside of defined business hours, the system queues the action and executes it at the next available designated business hour. In this scenario, it will queue the email to send at 9 AM on Monday."
            },
            {
                "id": "q31",
                "text": "Scenario: A marketing manager wants to ensure that any prospect who downloads the '2024 Industry Report' (a PDF hosted in Account Engagement) is immediately added to a specific Salesforce Campaign with the status 'Downloaded'. Which features could achieve this in real-time?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create a Custom Redirect for the PDF link, and add a Completion Action to add the prospect to the Salesforce campaign."
                    },
                    {
                        "id": "B",
                        "text": "Add a Completion Action directly to the Account Engagement File record for the PDF."
                    },
                    {
                        "id": "C",
                        "text": "Put the PDF behind an Account Engagement Form, and add a Completion Action to the Form to add the prospect to the Salesforce campaign."
                    },
                    {
                        "id": "D",
                        "text": "Create an Automation Rule looking for the file access, and apply the Salesforce Campaign action."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Rules evaluate a prospect's current criteria or data values (such as Assigned User, Score, Grade, Custom Fields, or List membership). Triggers evaluate actions taken by the prospect within a timeframe (like clicking a link), and Actions perform tasks (like assigning a user or sending an email)."
            },
            {
                "id": "q32",
                "text": "Scenario: A prospect is currently unassigned in Account Engagement. They fill out a form that has a Completion Action to 'Assign to user: John Doe'. However, there is also an active Automation Rule running that states: 'If Industry = Finance, Assign to user: Jane Smith'. The prospect's industry is 'Finance'. Who will the prospect be assigned to after submitting the form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "John Doe, because Completion Actions execute before Automation Rules."
                    },
                    {
                        "id": "B",
                        "text": "Jane Smith, because Automation Rules execute before Completion Actions."
                    },
                    {
                        "id": "C",
                        "text": "It will randomly assign between the two users."
                    },
                    {
                        "id": "D",
                        "text": "The prospect will remain unassigned due to conflicting rules."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "If a prospect is removed from the recipient list of an Engagement Program (which happens automatically if they no longer match a Dynamic List's criteria), they are immediately removed from the program. If they rejoin the list later, they resume at the exact step where they left off."
            },
            {
                "id": "q33",
                "text": "Scenario: You have a synced field in Salesforce called 'Lead Status'. You want Account Engagement to systematically stop sending marketing emails to any prospect whose Lead Status in Salesforce changes to 'Disqualified'. How can you implement this robustly?",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Create an Automation Rule: If Prospect custom field [Lead Status] is 'Disqualified', Action: 'Do not email'."
                    },
                    {
                        "id": "B",
                        "text": "Create a Dynamic List: If Prospect custom field [Lead Status] is 'Disqualified'. Instruct the team to use this list as a Suppression List on all email sends."
                    },
                    {
                        "id": "C",
                        "text": "Map the Salesforce 'Lead Status' field to the Account Engagement default 'Opted Out' field."
                    },
                    {
                        "id": "D",
                        "text": "Create a Segmentation Rule: If Prospect custom field [Lead Status] is 'Disqualified', Action: Add to a suppression list."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "C"
                ],
                "explanation": "The Test tab allows you to simulate a prospect's path by selecting dates and choosing the outcomes of Rules and Triggers to see how they would flow through the logic. It does not send actual emails or use real prospects for the simulation."
            },
            {
                "id": "q34",
                "text": "Scenario: A sales rep complains that they are receiving email notifications for every single page view a particular prospect makes on the website. You check the prospect record and see they have a high score. What is the most likely cause of these excessive notifications?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A Completion Action on a Page Action for a frequently visited page is set to 'Notify assigned user'."
                    },
                    {
                        "id": "B",
                        "text": "An Automation Rule with the action 'Notify assigned user' is set to repeat."
                    },
                    {
                        "id": "C",
                        "text": "The prospect's score recently crossed the threshold for a 'Notify assigned user' Automation Rule."
                    },
                    {
                        "id": "D",
                        "text": "The daily visitor activity email is misconfigured to send instantly."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "The trigger evaluates for a maximum of 2 days. If the prospect does not take the action (open the email) within that timeframe, they proceed down the 'No' path at exactly the 2-day mark. Any action taken after the wait period expires is not evaluated by that specific trigger."
            },
            {
                "id": "q35",
                "text": "Scenario: You want to grade prospects based on their Job Title. You have a Default profile. You want to give a 1/3 letter grade increase for a 'Director' title, and a 2/3 letter grade increase for a 'VP' or 'C-Level' title. How should the Profile criteria be configured?",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Create one Profile criteria called 'Job Title'. Give it a weight of 2/3. Use an Automation Rule to match titles and selectively adjust the profile criteria."
                    },
                    {
                        "id": "B",
                        "text": "Create two separate Profile criteria: 'Job Title - Director' (weight 1/3) and 'Job Title - Executive' (weight 2/3). Use Automation Rules to match the criteria."
                    },
                    {
                        "id": "C",
                        "text": "You cannot grade based on Job Title, because grades only calculate based on numerical custom fields."
                    },
                    {
                        "id": "D",
                        "text": "Create a single Profile criteria 'Job Title' with a weight of 1/3. Run the Automation Rule twice for Executives."
                    }
                ],
                "correctAnswers": [
                    "B",
                    "C"
                ],
                "explanation": "To build and start the program, you need a recipient list (static or dynamic) to feed prospects into the program, and Email Templates that are specifically enabled for use in 'Engagement Programs' in their basic settings. Salesforce campaigns are optional, and 1-to-1 templates cannot be used."
            },
            {
                "id": "q36",
                "text": "Scenario: A prospect's score was artificially inflated by an email security bot clicking links in a recently sent email. You want to revert their score to an accurate representation of their actual engagement. What are valid methods to correct the score?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Manually edit the score directly on the prospect's record."
                    },
                    {
                        "id": "B",
                        "text": "Create an Automation Rule to 'Adjust prospect score' by a negative amount."
                    },
                    {
                        "id": "C",
                        "text": "Delete the bot click activities directly from the prospect's activity history."
                    },
                    {
                        "id": "D",
                        "text": "Reset the baseline score in the Account Engagement global settings."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "While consecutive Rule steps (Option A) work, using a Dynamic List (Option B) is the most efficient and scalable method for evaluating multiple complex criteria (AND/OR logic) as a single Rule step in Engagement Studio. It keeps the program canvas cleaner and easier to manage. Triggers evaluate actions, not field data."
            },
            {
                "id": "q37",
                "text": "Scenario: Your sales team wants to easily prioritize leads who have submitted a 'Contact Us' form AND have a score over 100. They want these leads to prominently appear in a specific Salesforce List View. What is the most efficient and scalable way to achieve this using Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create a Dynamic List in Account Engagement with the criteria. Use an Automation Rule to Assign them to a Salesforce Queue."
                    },
                    {
                        "id": "B",
                        "text": "Create an Automation Rule: Criteria = Form [Contact Us] successful AND Score > 100. Action = Update Salesforce Campaign status to 'High Priority'. Filter the List View by this campaign status."
                    },
                    {
                        "id": "C",
                        "text": "Create an Automation Rule: Criteria = Form [Contact Us] successful AND Score > 100. Action = Change prospect custom field [Lead Priority] to 'High'. Map this field to Salesforce and filter the List View by it."
                    },
                    {
                        "id": "D",
                        "text": "Create a Segmentation Rule to assign these prospects to a designated Salesforce 'Priority' user."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q38",
                "text": "Scenario: A B2B company wants to track how many prospects interact with a new feature announcement video hosted on Wistia, embedded on a landing page. They want to increase the prospect's score by 10 points specifically when they click 'play' on the video. Assuming the Account Engagement tracking code is on the landing page, what else is required?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create a Custom Redirect linking to the Wistia video and add a completion action to increase the score."
                    },
                    {
                        "id": "B",
                        "text": "Create a Page Action for the landing page URL and set the score increase to 10."
                    },
                    {
                        "id": "C",
                        "text": "Use the native Wistia connector for Account Engagement to track video plays and assign scoring rules based on video engagement."
                    },
                    {
                        "id": "D",
                        "text": "Create an Automation Rule that evaluates the page view of the landing page and increases the score by 10."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q39",
                "text": "A marketer needs to send an urgent system downtime notification to all current customers, including those who have opted out of marketing communications. How should this be handled in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Send an Operational Email by checking the 'Operational Email' setting on the email draft."
                    },
                    {
                        "id": "B",
                        "text": "Create an Automation Rule to temporarily opt-in all prospects, send the email, and then opt them back out."
                    },
                    {
                        "id": "C",
                        "text": "Send the email using the 'Marketing' email type but remove the unsubscribe link from the template."
                    },
                    {
                        "id": "D",
                        "text": "Use a dynamic list to filter out prospects who are opted out, then send the email manually from Salesforce."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q40",
                "text": "A company is running an A/B test on an email campaign to a list of 10,000 prospects. The test duration is set to 24 hours. They have chosen to determine the winner based on the highest click-through rate. If both versions result in the exact same click-through rate after 24 hours, what happens?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The A/B test is extended by another 24 hours."
                    },
                    {
                        "id": "B",
                        "text": "Version A is automatically declared the winner and sent to the remaining audience."
                    },
                    {
                        "id": "C",
                        "text": "Version B is automatically declared the winner and sent to the remaining audience."
                    },
                    {
                        "id": "D",
                        "text": "The user is notified to manually select a winner before the remaining emails are sent."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q41",
                "text": "A prospect replies to an Account Engagement marketing email with an 'Out of Office' (OOO) auto-responder. Reply Tracking is enabled for the email. What is the expected behavior?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The OOO reply is tracked as a standard reply, inflating the reply metrics."
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement filters out most standard OOO replies, so they usually do not count towards reply metrics."
                    },
                    {
                        "id": "C",
                        "text": "The prospect's record is updated with a temporary 'Unavailable' status."
                    },
                    {
                        "id": "D",
                        "text": "The OOO reply triggers an automatic soft bounce on the prospect's record."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q42",
                "text": "A user is setting up a new Email Preference Center (EPC) page. They want certain static lists to be available for prospects to opt in or out of. What must be true about a list for it to appear on the Email Preference Center? (Choose 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "The list must be an active dynamic list."
                    },
                    {
                        "id": "B",
                        "text": "The list must have the 'Public List' setting checked."
                    },
                    {
                        "id": "C",
                        "text": "The list must be associated with the specific Email Preference Center page."
                    },
                    {
                        "id": "D",
                        "text": "The list must have at least one active prospect on it."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q43",
                "text": "An administrator notices that some custom redirect links embedded in a recently sent marketing email are not tracking clicks properly for specific prospects, even though the links resolve to the correct URL. The emails were sent via Engagement Studio. What is the most likely cause?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Custom redirects within emails are only tracked for prospects who have previously accepted cookies."
                    },
                    {
                        "id": "B",
                        "text": "Custom redirects should not be used in Account Engagement emails; regular URLs are automatically rewritten and tracked."
                    },
                    {
                        "id": "C",
                        "text": "The custom redirect domain is different from the email sending domain."
                    },
                    {
                        "id": "D",
                        "text": "Engagement Studio does not support custom redirect tracking in its email send nodes."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q44",
                "text": "A marketer wants to use Dynamic Content in an email. The variation displayed should be based on the prospect's 'Industry'. The marketer notices that some prospects do not have a value for 'Industry'. How does Account Engagement handle prospects who do not match any of the variations specified in the Dynamic Content block?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The email fails to send to those prospects."
                    },
                    {
                        "id": "B",
                        "text": "The prospects receive the email with a blank space where the Dynamic Content should be."
                    },
                    {
                        "id": "C",
                        "text": "The prospects receive the Default Content specified in the Dynamic Content block."
                    },
                    {
                        "id": "D",
                        "text": "The email sends, but the prospect is automatically redirected to the preference center to update their data."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q45",
                "text": "A prospect has hard bounced on a recent email send. A week later, a sales rep updates the prospect's email address in Salesforce. What happens to the prospect's mailable status in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The hard bounce flag is automatically removed when the new email address syncs, and the prospect becomes mailable."
                    },
                    {
                        "id": "B",
                        "text": "The prospect remains unmailable; the hard bounce flag must be manually removed in Account Engagement."
                    },
                    {
                        "id": "C",
                        "text": "The prospect becomes mailable only if they fill out a form using the new email address."
                    },
                    {
                        "id": "D",
                        "text": "A new prospect record is created in Account Engagement with the new email address."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q46",
                "text": "A company requires a 'Two-Click Unsubscribe' process to prevent email security scanners from accidentally unsubscribing prospects. How is this configured in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Enable the 'Two-Click Unsubscribe' setting in Account Engagement Settings."
                    },
                    {
                        "id": "B",
                        "text": "Create a custom landing page with an unsubscribe form and link to it from the email."
                    },
                    {
                        "id": "C",
                        "text": "Use a custom redirect to track the click, then redirect to the default unsubscribe page."
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement does not natively support Two-Click Unsubscribe; it relies on preference centers."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q47",
                "text": "A marketer is building an Engagement Studio program. They add an 'Evaluate: Email Click' rule immediately following an 'Action: Send Email' node. They set the wait time on the click rule to 'Up to 3 days'. When does the prospect move down the 'Yes' path?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Exactly 3 days after the email was sent, if they clicked at any point."
                    },
                    {
                        "id": "B",
                        "text": "Immediately after they click the link, provided it happens within the 3-day window."
                    },
                    {
                        "id": "C",
                        "text": "At the end of the 3rd day, regardless of when they clicked."
                    },
                    {
                        "id": "D",
                        "text": "They will move down the 'Yes' path as soon as the email is delivered."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q48",
                "text": "A company wants to send an email template but wants the 'From' sender to be the prospect's assigned CRM account owner. If there is no CRM account owner, it should fall back to the prospect's assigned user. If there is no assigned user, it should fall back to a generic 'marketing@company.com' address. How should the sender hierarchy be configured? (Select the correct sequence)",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "1. Assigned User, 2. Account Owner, 3. General User"
                    },
                    {
                        "id": "B",
                        "text": "1. Account Owner, 2. Assigned User, 3. Specific User"
                    },
                    {
                        "id": "C",
                        "text": "1. Specific User, 2. Assigned User, 3. Account Owner"
                    },
                    {
                        "id": "D",
                        "text": "1. Account Owner, 2. Specific User, 3. Assigned User"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q49",
                "text": "You are preparing a list email but want to ensure it looks correct across different email clients like Outlook, Gmail, and mobile devices before sending. What native Account Engagement feature should be used?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A/B Testing"
                    },
                    {
                        "id": "B",
                        "text": "Advanced Email Analytics (Litmus integration)"
                    },
                    {
                        "id": "C",
                        "text": "Send to Test List"
                    },
                    {
                        "id": "D",
                        "text": "Email Preview Mode"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q50",
                "text": "A prospect previously opted out of all marketing emails by clicking the Unsubscribe link. Six months later, they submit a Contact Us form on your website. They want to receive marketing emails again. What is the process for them to resubscribe?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are automatically opted back in when they submit the form."
                    },
                    {
                        "id": "B",
                        "text": "An Account Engagement administrator must manually uncheck the 'Opted Out' field on their record."
                    },
                    {
                        "id": "C",
                        "text": "They must be sent an autoresponder email with a resubscribe link, which they must click to confirm."
                    },
                    {
                        "id": "D",
                        "text": "The sync with Salesforce will automatically overwrite their opt-out status."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q51",
                "text": "A marketing manager created an Engagement Program to promote an upcoming webinar. They added a 'Trigger: Custom Redirect Click' step with an evaluation period of 'Wait up to 3 days'. A prospect clicks the custom redirect on Day 1. What happens next?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect immediately moves down the 'Yes' path and proceeds to the next step."
                    },
                    {
                        "id": "B",
                        "text": "The prospect waits the full 3 days on the step, then moves down the 'Yes' path."
                    },
                    {
                        "id": "C",
                        "text": "The prospect moves down the 'Yes' path at the end of Day 1."
                    },
                    {
                        "id": "D",
                        "text": "The system waits 3 days to see if the prospect clicks again before moving them down the 'Yes' path."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q52",
                "text": "You are managing an Engagement Studio program that allows prospects to repeat the program. Which of the following statements are true regarding repeatable Engagement Programs? (Choose 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "You can specify the exact steps a prospect must repeat."
                    },
                    {
                        "id": "B",
                        "text": "You can limit the total number of times a prospect can repeat the program."
                    },
                    {
                        "id": "C",
                        "text": "Prospects can re-enter the program immediately after finishing it."
                    },
                    {
                        "id": "D",
                        "text": "You must define a waiting period before a prospect can re-enter the program."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q53",
                "text": "A prospect is currently resting on a 5-day wait step in an active Engagement Program. The marketing admin pauses the program and adds a new 'Send Email' step immediately after the 5-day wait step, followed by another 2-day wait step. What happens to the prospect when the program is unpaused?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect restarts the 5-day wait period from the beginning."
                    },
                    {
                        "id": "B",
                        "text": "The prospect finishes the remaining time on their 5-day wait, then receives the new email."
                    },
                    {
                        "id": "C",
                        "text": "The prospect skips the new email step because it wasn't there when they entered the wait step."
                    },
                    {
                        "id": "D",
                        "text": "The prospect is removed from the program because their path was altered."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q54",
                "text": "An Engagement Program is configured to only send emails during business hours (Monday-Friday, 9 AM - 5 PM). A prospect completes a 'Wait 2 days' step on a Saturday at 10 AM. The next step is a 'Send Email' action. When will the prospect receive the email?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Immediately on Saturday at 10 AM, because wait periods override business hours."
                    },
                    {
                        "id": "B",
                        "text": "Monday at 9 AM."
                    },
                    {
                        "id": "C",
                        "text": "Monday at 10 AM."
                    },
                    {
                        "id": "D",
                        "text": "The email will fail to send and the prospect moves to the next step."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q55",
                "text": "A marketing user wants to branch prospects based on whether they currently have an assigned user in Account Engagement before assigning them a new task. Which Engagement Studio step type should be used?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Trigger"
                    },
                    {
                        "id": "B",
                        "text": "Rule"
                    },
                    {
                        "id": "C",
                        "text": "Action"
                    },
                    {
                        "id": "D",
                        "text": "Complex"
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q56",
                "text": "A prospect is moving through an Engagement Program fed by a Dynamic List. While waiting on a 4-day 'Wait' step, the prospect's field values change, causing them to no longer match the criteria and be removed from the Dynamic List. What is the immediate result?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The prospect remains on the wait step but will not proceed further until re-added to the list."
                    },
                    {
                        "id": "B",
                        "text": "The prospect is immediately removed from the Engagement Program."
                    },
                    {
                        "id": "C",
                        "text": "The prospect completes the current wait step and is then removed from the program."
                    },
                    {
                        "id": "D",
                        "text": "The prospect continues through the program normally since they have already entered."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q57",
                "text": "When testing an Engagement Program using the 'Test' tab, which of the following actions can a user perform to verify the logic? (Choose 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Select different dates to see how time-based steps will behave."
                    },
                    {
                        "id": "B",
                        "text": "Send test emails to a designated test list."
                    },
                    {
                        "id": "C",
                        "text": "Choose 'Yes' or 'No' outcomes for Rule and Trigger steps."
                    },
                    {
                        "id": "D",
                        "text": "Add real prospects to the test to see their predicted path."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q58",
                "text": "In an Engagement Program, a 'Trigger: Email Open' step is set to 'Wait up to 2 days'. A prospect opens the email on day 3. Which path does the prospect take, and when?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The 'Yes' path on day 3."
                    },
                    {
                        "id": "B",
                        "text": "The 'No' path at the end of day 2."
                    },
                    {
                        "id": "C",
                        "text": "The 'No' path immediately after the email is sent."
                    },
                    {
                        "id": "D",
                        "text": "The prospect is held at the step indefinitely until they open the email."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q59",
                "text": "Which of the following assets MUST be prepared and available before you can fully build and start an Engagement Program that sends automated emails? (Choose 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "An Email Template designated for '1-to-1 Emails'."
                    },
                    {
                        "id": "B",
                        "text": "An Email Template designated for 'Engagement Programs'."
                    },
                    {
                        "id": "C",
                        "text": "A static or dynamic recipient list."
                    },
                    {
                        "id": "D",
                        "text": "A predefined Salesforce Campaign."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            },
            {
                "id": "q60",
                "text": "You are building a nurture program and want to check two conditions before sending the next email: the prospect's industry must be 'Healthcare' AND their score must be greater than 100. What is the most efficient way to achieve this complex logic?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create two consecutive Rule steps: Industry is Healthcare (Yes path) -> Score is > 100 (Yes path) -> Send Email."
                    },
                    {
                        "id": "B",
                        "text": "Create a Dynamic List with both criteria and use a single 'Rule: Prospect List' step in the Engagement Program."
                    },
                    {
                        "id": "C",
                        "text": "Use a single Trigger step to evaluate both the Industry and Score simultaneously."
                    },
                    {
                        "id": "D",
                        "text": "This complex logic cannot be achieved in Engagement Studio and requires an Automation Rule."
                    }
                ],
                "correctAnswers": [],
                "explanation": ""
            }
        ]
    },
    {
        "id": "exam_11",
        "title": "Salesforce Exam 5",
        "questions": [
            {
                "id": "q1",
                "text": "A marketing user at Northern Trail Outfitters (NTO) wants to track visitor activity on a newly acquired brand's website. The brand uses a separate domain (e.g., www.newbrand.com). How can the marketer ensure visitor activities on this new domain are tracked and attributed to Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Add the new domain to the tracker domains in Account Engagement settings and place the generated tracking code on the new website."
                    },
                    {
                        "id": "B",
                        "text": "Create a new Business Unit for the new domain and place a new tracking code."
                    },
                    {
                        "id": "C",
                        "text": "Use a Page Action to track visitors on the new domain."
                    },
                    {
                        "id": "D",
                        "text": "Configure an active automation rule to track IP addresses from the new domain."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- You must add the new tracker domain in Account Engagement settings to generate the specific tracking code for that domain, which then needs to be placed on the new website's pages."
            },
            {
                "id": "q2",
                "text": "A visitor is browsing your company website and has not yet submitted a form. Which of the following activities will Account Engagement track for this anonymous visitor? (Select 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Pages viewed on the website."
                    },
                    {
                        "id": "B",
                        "text": "Duration of time spent on the website."
                    },
                    {
                        "id": "C",
                        "text": "Form abandonment."
                    },
                    {
                        "id": "D",
                        "text": "Clicks on links to external websites."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B"
                ],
                "explanation": "- For anonymous visitors, Account Engagement tracks page views and the duration of their visit. Form abandonment requires plugins or custom scripts, and external link clicks are not tracked unless they are custom redirects."
            },
            {
                "id": "q3",
                "text": "An administrator needs to implement tracking opt-in preferences for visitors from the European Union to comply with GDPR. How should this be configured in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Enable the \"Tracking Opt-in Preferences\" feature in Account Engagement settings and configure the message."
                    },
                    {
                        "id": "B",
                        "text": "Create a dynamic list of EU prospects and send them an email asking for consent."
                    },
                    {
                        "id": "C",
                        "text": "Use a custom JavaScript code on the website to block cookies until consent is given."
                    },
                    {
                        "id": "D",
                        "text": "Set up a custom redirect to capture tracking consent."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Enabling the \"Tracking Opt-in Preferences\" feature allows you to display a banner requesting consent to track cookies, satisfying GDPR requirements."
            },
            {
                "id": "q4",
                "text": "A prospect is assigned to a user in Account Engagement but their record in Salesforce is owned by a different user. The connector is set to use the Salesforce owner as the master. What will happen to the prospect owner in Account Engagement upon the next sync?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The Account Engagement owner will update to match the Salesforce owner."
                    },
                    {
                        "id": "B",
                        "text": "The Salesforce owner will update to match the Account Engagement owner."
                    },
                    {
                        "id": "C",
                        "text": "A sync error will occur."
                    },
                    {
                        "id": "D",
                        "text": "The owner fields will remain different in both systems."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- If the connector is set to use the Salesforce owner as the master, the Salesforce owner will overwrite the Account Engagement owner upon sync."
            },
            {
                "id": "q5",
                "text": "What is the primary purpose of the pi_opt_in cookie set by Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To track the visitor's page views across multiple sessions."
                    },
                    {
                        "id": "B",
                        "text": "To remember if a visitor has opted in or out of tracking when the tracking opt-in preference is enabled."
                    },
                    {
                        "id": "C",
                        "text": "To store the visitor's unique identifier for tracking purposes."
                    },
                    {
                        "id": "D",
                        "text": "To maintain an active session for a logged-in Account Engagement user."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The pi_opt_in cookie remembers whether a visitor has consented to or opted out of tracking when the tracking opt-in preference feature is active. Administration (11%)"
            },
            {
                "id": "q6",
                "text": "An Account Engagement administrator wants to map a custom Salesforce field named \"Industry Sector\" to a custom prospect field in Account Engagement. The Salesforce field is a picklist. What field type should be used for the Account Engagement custom field to ensure data syncs correctly?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Text"
                    },
                    {
                        "id": "B",
                        "text": "Radio Button"
                    },
                    {
                        "id": "C",
                        "text": "Dropdown"
                    },
                    {
                        "id": "D",
                        "text": "Multi-Select"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- A Salesforce picklist field should be mapped to an Account Engagement Dropdown (or Radio Button) field to maintain data consistency and predefined values."
            },
            {
                "id": "q7",
                "text": "When configuring the Salesforce-Account Engagement connector, what happens if the \"Automatically create prospects in Account Engagement if they are created as a Lead or Contact in Salesforce\" setting is enabled?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "All existing Leads and Contacts in Salesforce are immediately imported into Account Engagement."
                    },
                    {
                        "id": "B",
                        "text": "Only new Leads and Contacts created in Salesforce after the setting is enabled will be created as prospects in Account Engagement."
                    },
                    {
                        "id": "C",
                        "text": "Prospects created in Account Engagement will automatically create Leads in Salesforce."
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement will only sync with Leads, not Contacts."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- This setting ensures that any new Leads or Contacts created in Salesforce will automatically generate a corresponding prospect record in Account Engagement. It does not retroactively pull all existing records."
            },
            {
                "id": "q8",
                "text": "A user deleted a prospect in Account Engagement by mistake. Where can the administrator go to restore the deleted prospect, and how long do they have to do so?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The Recycle Bin; indefinitely."
                    },
                    {
                        "id": "B",
                        "text": "The Recycle Bin; 30 days."
                    },
                    {
                        "id": "C",
                        "text": "The Prospect List view; 15 days."
                    },
                    {
                        "id": "D",
                        "text": "Deleted prospects cannot be restored."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Deleted prospects go to the Account Engagement Recycle Bin, where they reside indefinitely and can be undeleted at any time."
            },
            {
                "id": "q9",
                "text": "An organization is using custom objects in Salesforce to track event registrations. They want to use this data in Account Engagement to segment prospects. What must the administrator do to make custom objects available in Account Engagement? (Select 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Enable Custom Objects in Account Engagement settings."
                    },
                    {
                        "id": "B",
                        "text": "Ensure the custom object has a lookup or master-detail relationship to the Lead, Contact, or Account object in Salesforce."
                    },
                    {
                        "id": "C",
                        "text": "Map the custom object fields to prospect custom fields."
                    },
                    {
                        "id": "D",
                        "text": "Purchase the Advanced edition of Account Engagement."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B"
                ],
                "explanation": "- To use custom objects, the feature must be enabled in settings (if the edition supports it), and the custom object in Salesforce must be related to a Lead, Contact, or Account."
            },
            {
                "id": "q10",
                "text": "Which user role in Account Engagement has the ability to import prospects, create email templates, and view reports, but CANNOT modify Account Engagement settings or connector configurations?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Administrator"
                    },
                    {
                        "id": "B",
                        "text": "Marketing"
                    },
                    {
                        "id": "C",
                        "text": "Sales Manager"
                    },
                    {
                        "id": "D",
                        "text": "Sales"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The Marketing role can create and manage marketing assets and prospects but lacks the administrative privileges to change account settings or connector configurations."
            },
            {
                "id": "q11",
                "text": "Your company uses a specific currency (EUR) for all transactions. Where do you configure the default currency for your Account Engagement account?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Account Settings"
                    },
                    {
                        "id": "B",
                        "text": "Salesforce Connector settings"
                    },
                    {
                        "id": "C",
                        "text": "Campaign Settings"
                    },
                    {
                        "id": "D",
                        "text": "User Settings"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- The default currency for an Account Engagement instance is configured in the Account Settings."
            },
            {
                "id": "q12",
                "text": "A company wants to ensure that prospects with an email address ending in @competitor.com are never created in Account Engagement. What feature should be used to achieve this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "B",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "C",
                        "text": "B2B Marketing Analytics"
                    },
                    {
                        "id": "D",
                        "text": "Visitor Filters"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- An Automation Rule can be set to run continuously and delete or \"Do Not Sync\" prospects matching specific criteria, such as a competitor's email domain. (Alternatively, setting up a prospect custom field validation or using an active form validation, but Automation Rule is a standard way to handle creation prevention/deletion). Pardot Forms, Form Handlers and Landing Pages (20%)"
            },
            {
                "id": "q13",
                "text": "A marketing team wants to collect information from a prospect gradually over time. They want to ask for the prospect's company name on the first form submission, and their job title on the second form submission. Which feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dependent Fields"
                    },
                    {
                        "id": "B",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "C",
                        "text": "Kiosk/Data Entry Mode"
                    },
                    {
                        "id": "D",
                        "text": "Form Handlers"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Progressive Profiling allows you to conditionally display form fields based on what information you already have about the prospect, gradually building their profile over multiple submissions."
            },
            {
                "id": "q14",
                "text": "A company uses a third-party form tool on their website but wants to capture the submission data in Account Engagement. Which feature allows them to post the form data to Account Engagement without replacing their existing form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Form Handler"
                    },
                    {
                        "id": "B",
                        "text": "Custom Redirect"
                    },
                    {
                        "id": "C",
                        "text": "Page Action"
                    },
                    {
                        "id": "D",
                        "text": "Webhook"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Form Handlers allow you to post data from an external third-party form directly into Account Engagement while retaining your existing form's design and functionality."
            },
            {
                "id": "q15",
                "text": "What is a key limitation of using an Account Engagement Form Handler instead of an Account Engagement Form? (Select 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Progressive Profiling is not supported."
                    },
                    {
                        "id": "B",
                        "text": "Form Handler submissions cannot trigger completion actions."
                    },
                    {
                        "id": "C",
                        "text": "Dependent fields cannot be configured natively in Account Engagement."
                    },
                    {
                        "id": "D",
                        "text": "Form Handlers cannot be used on HTTPS pages."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "C"
                ],
                "explanation": "- Form Handlers cannot utilize Progressive Profiling or native Dependent Fields because the form logic resides on the third-party system, not within Account Engagement."
            },
            {
                "id": "q16",
                "text": "A marketer creates a landing page with a form in Account Engagement. They want to redirect the prospect to a specific \"Thank You\" page hosted on their website after the form is submitted. Where is this configured?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "In the Landing Page settings."
                    },
                    {
                        "id": "B",
                        "text": "In the Form settings under the \"Completions\" step."
                    },
                    {
                        "id": "C",
                        "text": "Using an Automation Rule."
                    },
                    {
                        "id": "D",
                        "text": "In the Layout Template."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The redirect location upon form submission is configured in the form wizard under the \"Completions\" step (Thank You Code/Success Location)."
            },
            {
                "id": "q17",
                "text": "Which feature allows you to show different form fields based on the value selected in a previous field? (e.g., If \"Country\" is \"US\", show \"State\" dropdown).",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Progressive Profiling"
                    },
                    {
                        "id": "B",
                        "text": "Dependent Fields"
                    },
                    {
                        "id": "C",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "D",
                        "text": "Custom Fields"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Dependent Fields allow you to show or hide fields based on a prospect's response to a previous field on the form."
            },
            {
                "id": "q18",
                "text": "A marketing team wants to test two different versions of a landing page to see which one converts better. Which Account Engagement feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Multivariate Test"
                    },
                    {
                        "id": "B",
                        "text": "A/B Testing (Emails)"
                    },
                    {
                        "id": "C",
                        "text": "Engagement Studio"
                    },
                    {
                        "id": "D",
                        "text": "Multivariate Testing for Landing Pages is not natively supported in Account Engagement."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Account Engagement offers Multivariate Testing for landing pages to test different versions and track conversions to see which performs best."
            },
            {
                "id": "q19",
                "text": "A prospect submits a form on an Account Engagement Landing Page. Which of the following completion actions can be triggered immediately upon submission? (Select 3)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Add to List"
                    },
                    {
                        "id": "B",
                        "text": "Assign to User"
                    },
                    {
                        "id": "C",
                        "text": "Send Autoresponder Email"
                    },
                    {
                        "id": "D",
                        "text": "Create Salesforce Opportunity"
                    },
                    {
                        "id": "E",
                        "text": "Add to Salesforce Campaign"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "C"
                ],
                "explanation": "- Adding to a list, assigning to a user, and sending an autoresponder are all standard completion actions. Creating an Opportunity requires Salesforce automation, though creating a task or adding to a Salesforce campaign is possible."
            },
            {
                "id": "q20",
                "text": "What is the purpose of enabling \"Kiosk/Data Entry Mode\" on an Account Engagement form?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To track the location of the device used to submit the form."
                    },
                    {
                        "id": "B",
                        "text": "To prevent the form from setting a tracking cookie on the browser, useful for trade shows where multiple people use the same device."
                    },
                    {
                        "id": "C",
                        "text": "To bypass the progressive profiling logic."
                    },
                    {
                        "id": "D",
                        "text": "To hide the form from search engines."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Kiosk/Data Entry Mode prevents the form from dropping a tracking cookie, ensuring that multiple submissions from the same device don't overwrite the same prospect record."
            },
            {
                "id": "q21",
                "text": "A marketer wants to use an Account Engagement landing page but completely customize the HTML, CSS, and layout without using the drag-and-drop builder. What should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Stock Templates"
                    },
                    {
                        "id": "B",
                        "text": "Layout Templates"
                    },
                    {
                        "id": "C",
                        "text": "Custom Redirects"
                    },
                    {
                        "id": "D",
                        "text": "Form Handlers"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Layout Templates give you full control over the HTML and CSS of a landing page or form, allowing for completely custom designs."
            },
            {
                "id": "q22",
                "text": "When reviewing the \"Form and Form Handler Reporting\" in Account Engagement, what does the \"Conversions\" metric represent?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The total number of form submissions."
                    },
                    {
                        "id": "B",
                        "text": "The number of times the form was viewed."
                    },
                    {
                        "id": "C",
                        "text": "The number of anonymous visitors who submitted the form and became identified prospects."
                    },
                    {
                        "id": "D",
                        "text": "The percentage of visitors who clicked the submit button."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- In Account Engagement form reporting, a \"Conversion\" specifically means an anonymous visitor submitted the form and became an identified prospect. Subsequent submissions by known prospects are just \"Submissions\"."
            },
            {
                "id": "q23",
                "text": "A company has a form handler configured to capture leads from their website. The data is not appearing in Account Engagement. What is the most common reason for this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The form handler URL is incorrect in the website form's action attribute."
                    },
                    {
                        "id": "B",
                        "text": "Form handlers only work with standard fields."
                    },
                    {
                        "id": "C",
                        "text": "The website is not using SSL."
                    },
                    {
                        "id": "D",
                        "text": "Form handlers require an active Salesforce connector."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- The most common issue is that the third-party form's action attribute is not correctly pointing to the Account Engagement Form Handler's endpoint URL."
            },
            {
                "id": "q24",
                "text": "You want to track downloads of a PDF whitepaper hosted on your website and add prospects who click the link to a specific list. Which feature is best suited for this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Page Action"
                    },
                    {
                        "id": "B",
                        "text": "Custom Redirect"
                    },
                    {
                        "id": "C",
                        "text": "Form Handler"
                    },
                    {
                        "id": "D",
                        "text": "Automation Rule"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Custom Redirects are ideal for tracking clicks on links to files (like PDFs) hosted externally or on your own site, and you can apply completion actions like adding to a list. Lead Management (24%)"
            },
            {
                "id": "q25",
                "text": "A marketing manager wants to score prospects based on their engagement with marketing assets. Which tool should they use to automatically assign points for actions like email clicks and form submissions?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Grading Profile"
                    },
                    {
                        "id": "B",
                        "text": "Scoring Rules"
                    },
                    {
                        "id": "C",
                        "text": "Einstein Behavior Scoring"
                    },
                    {
                        "id": "D",
                        "text": "Automation Rules"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Scoring Rules govern how many points a prospect is awarded for specific interactions (e.g., email clicks, form submissions) across the entire account."
            },
            {
                "id": "q26",
                "text": "An organization wants to grade their prospects from A+ to F based on demographic data such as Job Title, Industry, and Company Size. Which feature should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Scoring Rules"
                    },
                    {
                        "id": "B",
                        "text": "Profiles and Grading"
                    },
                    {
                        "id": "C",
                        "text": "Custom Fields"
                    },
                    {
                        "id": "D",
                        "text": "Einstein Lead Scoring"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Profiles and Grading evaluate how well a prospect fits your ideal customer profile based on demographic and firmographic data."
            },
            {
                "id": "q27",
                "text": "A prospect has a score of 150 and a grade of A-. They submit a form that has a completion action to \"Adjust prospect score by +50\". What will their new score be?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "150"
                    },
                    {
                        "id": "B",
                        "text": "200"
                    },
                    {
                        "id": "C",
                        "text": "A+"
                    },
                    {
                        "id": "D",
                        "text": "50"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The completion action \"Adjust prospect score by +50\" will add 50 points to their existing score of 150, resulting in 200."
            },
            {
                "id": "q28",
                "text": "Which Account Engagement feature evaluates a prospect's engagement history using machine learning to determine their likelihood to convert?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Einstein Behavior Scoring"
                    },
                    {
                        "id": "B",
                        "text": "Einstein Lead Scoring"
                    },
                    {
                        "id": "C",
                        "text": "Einstein Campaign Insights"
                    },
                    {
                        "id": "D",
                        "text": "Predictive Scoring"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Einstein Behavior Scoring uses machine learning to analyze prospect engagement history and identify those most likely to convert."
            },
            {
                "id": "q29",
                "text": "A marketer needs to create a list of all prospects who have a score greater than 100 AND belong to the \"Healthcare\" industry. The list needs to automatically update as prospects meet or fail to meet the criteria. Which type of list should they create?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Static List"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "C",
                        "text": "Test List"
                    },
                    {
                        "id": "D",
                        "text": "Public List"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- A Dynamic List automatically adds and removes prospects as their data changes to meet or fail the specified criteria."
            },
            {
                "id": "q30",
                "text": "Which automation tool allows you to perform an action on a prospect based on a specific criteria, but only runs ONCE per prospect?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "B",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Completion Action"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Automation Rules evaluate criteria continuously but default to running only ONCE per matching prospect (unless explicitly set to repeat)."
            },
            {
                "id": "q31",
                "text": "A company wants to assign prospects to the sales team in a round-robin fashion when they reach a score of 50. Which Account Engagement feature can facilitate this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Assignment Rule in Salesforce"
                    },
                    {
                        "id": "B",
                        "text": "Active Assignment Rule via Account Engagement Automation Rule"
                    },
                    {
                        "id": "C",
                        "text": "Assign to User completion action"
                    },
                    {
                        "id": "D",
                        "text": "Assign to Group in Account Engagement"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- By using an active assignment rule in Salesforce, Account Engagement can push the lead to Salesforce and let the Salesforce assignment rule handle the round-robin distribution. Account Engagement itself does not do round-robin directly without Salesforce."
            },
            {
                "id": "q32",
                "text": "You want to trigger a notification to the assigned sales rep when one of their prospects visits the pricing page. Which feature is most appropriate?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Page Action"
                    },
                    {
                        "id": "B",
                        "text": "Custom Redirect"
                    },
                    {
                        "id": "C",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Segmentation Rule"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Page Actions can trigger completion actions, such as notifying an assigned user, when a prospect visits a specific URL on your tracked website."
            },
            {
                "id": "q33",
                "text": "What is the difference between an Automation Rule and a Segmentation Rule?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Automation Rules run continuously and can perform various actions; Segmentation Rules run once and only add/remove prospects from lists or campaigns."
                    },
                    {
                        "id": "B",
                        "text": "Automation Rules are used for scoring; Segmentation Rules are used for grading."
                    },
                    {
                        "id": "C",
                        "text": "Automation Rules require a Salesforce connector; Segmentation Rules do not."
                    },
                    {
                        "id": "D",
                        "text": "There is no difference; they are the same feature."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Automation Rules evaluate continuously and can perform a wide range of actions. Segmentation Rules run once retroactively and only add/remove from lists or campaigns."
            },
            {
                "id": "q34",
                "text": "A marketer wants to find all prospects who clicked a link in a specific email sent last week and add them to a list. Which tool should they use for a one-time list creation based on this past activity?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Automation Rule"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic List"
                    },
                    {
                        "id": "C",
                        "text": "Segmentation Rule"
                    },
                    {
                        "id": "D",
                        "text": "Page Action"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- A Segmentation Rule is perfect for creating a one-time list based on past criteria, such as a previous email click."
            },
            {
                "id": "q35",
                "text": "How can you ensure that a prospect's score does not increase infinitely if they repeatedly click the same link in an email?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Set a maximum score limit in account settings."
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement only scores the first click of a specific link in an email by default."
                    },
                    {
                        "id": "C",
                        "text": "Use an Automation Rule to reset the score daily."
                    },
                    {
                        "id": "D",
                        "text": "Disable scoring for email clicks."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- By default, Account Engagement scoring rules only award points for the first click on a specific link within an email to prevent inflated scores."
            },
            {
                "id": "q36",
                "text": "An organization uses \"Profiles\" in Account Engagement. A prospect's initial grade is D. The profile criteria \"Industry = Technology\" is set to adjust the grade by 1/3 letter. If the prospect matches this criteria, what is their new grade?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "D+"
                    },
                    {
                        "id": "B",
                        "text": "C-"
                    },
                    {
                        "id": "C",
                        "text": "C"
                    },
                    {
                        "id": "D",
                        "text": "C+"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- A 1/3 letter grade adjustment upwards from a D results in a D+."
            },
            {
                "id": "q37",
                "text": "A marketer wants to track prospects who view a specific video hosted on YouTube, embedded on their website. They want to score the prospect if they watch at least 50% of the video. How can this be achieved in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use a Page Action on the video URL."
                    },
                    {
                        "id": "B",
                        "text": "Use a Custom Redirect for the video link."
                    },
                    {
                        "id": "C",
                        "text": "Account Engagement cannot track engagement within an embedded YouTube video natively; custom tracking via API or a supported video connector (like Wistia/Vimeo) is required."
                    },
                    {
                        "id": "D",
                        "text": "Use a Form Handler."
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Native Account Engagement cannot track engagement milestones inside an iframe video. It requires a supported video connector or custom API tracking."
            },
            {
                "id": "q38",
                "text": "What is a prerequisite for using Einstein Behavior Scoring in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "B2B Marketing Analytics must be enabled."
                    },
                    {
                        "id": "B",
                        "text": "Advanced or Premium edition of Account Engagement."
                    },
                    {
                        "id": "C",
                        "text": "A minimum of 6 months of engagement data and at least 20 connected campaigns."
                    },
                    {
                        "id": "D",
                        "text": "Both A and C."
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "- Einstein Behavior Scoring requires B2B Marketing Analytics (or Advanced/Premium edition) and sufficient historical data (typically 6 months and 20 connected campaigns) to train the machine learning model. Email Marketing (20%)"
            },
            {
                "id": "q39",
                "text": "A marketer is building an email template and wants to include the prospect's first name. If the prospect's first name is unknown, they want it to display \"Valued Customer\". How should this be implemented?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use Dynamic Content."
                    },
                    {
                        "id": "B",
                        "text": "Use a Handlebars Merge Field (HML) with a default value: {{Recipient.FirstName | default: \"Valued Customer\"}}."
                    },
                    {
                        "id": "C",
                        "text": "It is not possible to set a default value; a blank space will appear."
                    },
                    {
                        "id": "D",
                        "text": "Create an Automation Rule to populate blank first names."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Using Handlebars Merge Language (HML), you can set a default value using the syntax {{Recipient.FirstName | default: \"Valued Customer\"}}."
            },
            {
                "id": "q40",
                "text": "Which of the following is required to send an email in Account Engagement? (Select 2)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "An unsubscribe link or email preference center link."
                    },
                    {
                        "id": "B",
                        "text": "A physical mailing address."
                    },
                    {
                        "id": "C",
                        "text": "A text version of the email."
                    },
                    {
                        "id": "D",
                        "text": "A subject line containing the word \"Update\"."
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B"
                ],
                "explanation": "- To comply with CAN-SPAM laws, Account Engagement requires an unsubscribe/preference center link and a physical mailing address in every commercial email."
            },
            {
                "id": "q41",
                "text": "A company wants to send a monthly newsletter. They want to ensure that prospects who have previously unsubscribed from the \"Newsletter\" list do not receive it, even if they are on the current recipient list. How does Account Engagement handle this?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The marketer must manually remove the unsubscribed prospects from the list before sending."
                    },
                    {
                        "id": "B",
                        "text": "Account Engagement automatically suppresses prospects who have opted out globally or unsubscribed from the specific list being used."
                    },
                    {
                        "id": "C",
                        "text": "The marketer must use an Automation Rule to prevent the send."
                    },
                    {
                        "id": "D",
                        "text": "Account Engagement will send the email to everyone on the list regardless of opt-out status."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Account Engagement automatically handles suppression. It will not send the email to anyone on the recipient list who has previously opted out globally or unsubscribed from that specific list."
            },
            {
                "id": "q42",
                "text": "What is the purpose of A/B Testing an email in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To test two completely different email templates."
                    },
                    {
                        "id": "B",
                        "text": "To test variations of the subject line, sender name, or email content on a portion of the list before sending the winning version to the remainder."
                    },
                    {
                        "id": "C",
                        "text": "To test the deliverability of the email across different email clients."
                    },
                    {
                        "id": "D",
                        "text": "To test the email against a spam filter."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- A/B testing allows you to test variations (subject line, sender, content) on a subset of your list to determine the winner, which is then sent to the remaining audience."
            },
            {
                "id": "q43",
                "text": "Which report provides the total number of unique clicks in an email send?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Email Template Report"
                    },
                    {
                        "id": "B",
                        "text": "List Email Report"
                    },
                    {
                        "id": "C",
                        "text": "Campaign Report"
                    },
                    {
                        "id": "D",
                        "text": "Form Report"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The List Email Report provides detailed metrics for a specific email send, including total and unique clicks."
            },
            {
                "id": "q44",
                "text": "A marketer wants to show a different promotional banner in an email based on the prospect's \"Industry\" field. Which feature allows them to achieve this within a single email template?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Variable Tags"
                    },
                    {
                        "id": "B",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "C",
                        "text": "Snippets"
                    },
                    {
                        "id": "D",
                        "text": "A/B Testing"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Dynamic Content allows you to swap out sections of an email based on a prospect's field value, allowing personalized content within a single template."
            },
            {
                "id": "q45",
                "text": "What is the recommended method for authenticating Account Engagement emails to improve deliverability and ensure emails are not marked as spam?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Setting up SPF and DKIM."
                    },
                    {
                        "id": "B",
                        "text": "Using a dedicated IP address."
                    },
                    {
                        "id": "C",
                        "text": "Enabling SSL on tracking domains."
                    },
                    {
                        "id": "D",
                        "text": "Adding a CAPTCHA to forms."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Setting up SPF and DKIM authentication proves to receiving email servers that Account Engagement is authorized to send emails on your behalf, improving deliverability."
            },
            {
                "id": "q46",
                "text": "When preparing to send a list email, you select a \"Sender\". Which of the following are valid sender options in Account Engagement? (Select 3)",
                "type": "multiple",
                "options": [
                    {
                        "id": "A",
                        "text": "Specific User"
                    },
                    {
                        "id": "B",
                        "text": "Assigned User"
                    },
                    {
                        "id": "C",
                        "text": "General Email Address (e.g., info@company.com)"
                    },
                    {
                        "id": "D",
                        "text": "Account Owner (Salesforce)"
                    },
                    {
                        "id": "E",
                        "text": "Random User"
                    }
                ],
                "correctAnswers": [
                    "A",
                    "B",
                    "C"
                ],
                "explanation": "- You can send an email from a Specific User, the prospect's Assigned User, or a General Email Address. You cannot send from a \"Random User\" and \"Account Owner\" requires specific configuration or Salesforce sync."
            },
            {
                "id": "q47",
                "text": "A marketer sends an email and notices a high \"Hard Bounce\" rate. What does a hard bounce indicate?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "The recipient's mailbox is temporarily full."
                    },
                    {
                        "id": "B",
                        "text": "The email address is permanently invalid or does not exist."
                    },
                    {
                        "id": "C",
                        "text": "The recipient's email server is temporarily down."
                    },
                    {
                        "id": "D",
                        "text": "The email was caught in a spam filter."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- A hard bounce indicates a permanent delivery failure, typically because the email address doesn't exist or the domain is invalid."
            },
            {
                "id": "q48",
                "text": "What is the function of \"Operational Emails\" in Account Engagement?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They bypass the prospect's opt-out status for critical, non-marketing communications."
                    },
                    {
                        "id": "B",
                        "text": "They are used exclusively for internal testing."
                    },
                    {
                        "id": "C",
                        "text": "They are emails sent directly from Salesforce."
                    },
                    {
                        "id": "D",
                        "text": "They are automated responses to form submissions."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Operational emails bypass opt-out settings and are used only for critical, non-commercial communications (e.g., system updates, legal notices)."
            },
            {
                "id": "q49",
                "text": "You want to insert a standard copyright footer across all your email templates so that if the year changes, you only have to update it in one place. Which feature should you use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Dynamic Content"
                    },
                    {
                        "id": "B",
                        "text": "Snippets"
                    },
                    {
                        "id": "C",
                        "text": "Handlebars Merge Fields"
                    },
                    {
                        "id": "D",
                        "text": "Layout Templates"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Snippets are reusable blocks of text, HTML, or images that can be inserted into emails and landing pages. Updating the snippet updates it everywhere it is used."
            },
            {
                "id": "q50",
                "text": "A prospect clicks a custom redirect link in an email. What actions can be triggered?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Only page views are tracked."
                    },
                    {
                        "id": "B",
                        "text": "Completion actions associated with the custom redirect will execute."
                    },
                    {
                        "id": "C",
                        "text": "The prospect's score will decrease."
                    },
                    {
                        "id": "D",
                        "text": "The email is marked as read."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Clicking a custom redirect triggers any completion actions configured on that specific redirect (e.g., add to list, adjust score). Engagement Studio (17%)"
            },
            {
                "id": "q51",
                "text": "A marketer is building an Engagement Studio program. They want to check if a prospect has clicked a specific link in an email sent in the previous step. Which element should they use?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Action"
                    },
                    {
                        "id": "B",
                        "text": "Rule"
                    },
                    {
                        "id": "C",
                        "text": "Trigger"
                    },
                    {
                        "id": "D",
                        "text": "End"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- A Trigger step listens for an action taken by the prospect, such as an email click, within a specified timeframe."
            },
            {
                "id": "q52",
                "text": "In an Engagement Studio program, what is the difference between a \"Rule\" and a \"Trigger\"?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "A Rule evaluates criteria (e.g., field value, score) based on data in Account Engagement; a Trigger listens for an action taken by the prospect (e.g., email click, form submission) within a specific timeframe."
                    },
                    {
                        "id": "B",
                        "text": "A Rule performs an action; a Trigger checks criteria."
                    },
                    {
                        "id": "C",
                        "text": "Rules can only check Salesforce data; Triggers check Account Engagement data."
                    },
                    {
                        "id": "D",
                        "text": "There is no difference."
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "- Rules evaluate static criteria or Account Engagement data; Triggers listen for prospect actions within a specific timeframe."
            },
            {
                "id": "q53",
                "text": "An Engagement Studio program has a \"Send Email\" action step, followed immediately by an \"Email Click\" trigger step evaluating the email sent. The trigger is set to evaluate for up to 3 days. What happens to a prospect who reaches this step?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are immediately moved down the \"No\" path."
                    },
                    {
                        "id": "B",
                        "text": "They wait at the trigger step until they click the email, or until 3 days pass. If they click within 3 days, they immediately move down the \"Yes\" path. If 3 days pass without a click, they move down the \"No\" path."
                    },
                    {
                        "id": "C",
                        "text": "They wait exactly 3 days regardless of when they click, then move down the appropriate path."
                    },
                    {
                        "id": "D",
                        "text": "The program pauses until the marketer manually advances them."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- In a trigger step following an email, the prospect waits until they take the action (click). If they click on day 1, they proceed immediately. If they don't click by day 3, they move down the \"No\" path."
            },
            {
                "id": "q54",
                "text": "A marketer wants to add a delay between two steps in an Engagement Studio program. They want the next step to execute on a specific date (e.g., October 1st). How can this be configured?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Use a \"Wait\" step."
                    },
                    {
                        "id": "B",
                        "text": "Select \"Wait until\" and specify the date on the action or trigger step."
                    },
                    {
                        "id": "C",
                        "text": "This is not possible; delays can only be in days."
                    },
                    {
                        "id": "D",
                        "text": "Use an Automation Rule to pause the program."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Engagement Studio allows you to set actions or triggers to execute on a specific date using the \"Wait until\" option."
            },
            {
                "id": "q55",
                "text": "If an Engagement Studio program is paused, what happens to the prospects currently in the program?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are removed from the program."
                    },
                    {
                        "id": "B",
                        "text": "They continue to progress through the program but no actions are executed."
                    },
                    {
                        "id": "C",
                        "text": "They remain exactly where they are. Wait times are also paused."
                    },
                    {
                        "id": "D",
                        "text": "They remain where they are, but if they are on a \"Wait\" step, the wait time continues to evaluate."
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "- When a program is paused, prospects remain in their current step. Wait times continue to run, so if a prospect's wait time expires while paused, they will immediately proceed to the next step when the program resumes."
            },
            {
                "id": "q56",
                "text": "Can a prospect run through the same Engagement Studio program more than once?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "No, prospects can only enter a program once."
                    },
                    {
                        "id": "B",
                        "text": "Yes, if the \"Allow prospects to enter program more than once\" setting is enabled."
                    },
                    {
                        "id": "C",
                        "text": "Yes, but only if they are removed and re-added to the recipient list."
                    },
                    {
                        "id": "D",
                        "text": "Yes, but only if an Automation Rule triggers it."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- Prospects can re-enter a program if the \"Allow prospects to enter program more than once\" setting is enabled and they meet the criteria."
            },
            {
                "id": "q57",
                "text": "You are building an Engagement Studio program to nurture new leads. You want to ensure that if a lead's status changes to \"Disqualified\" in Salesforce, they are immediately removed from the nurture program. How should you set this up?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Create a Rule step checking the Salesforce status before every Send Email action."
                    },
                    {
                        "id": "B",
                        "text": "Create a Dynamic List with criteria \"Salesforce Status is not Disqualified\" and use this as the Recipient List for the program."
                    },
                    {
                        "id": "C",
                        "text": "Use a Completion Action on the email to remove them if disqualified."
                    },
                    {
                        "id": "D",
                        "text": "This requires a custom APEX trigger in Salesforce."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The best practice is to use a Dynamic List as the recipient list. If the prospect's status changes to Disqualified, they no longer meet the list criteria, are removed from the list, and instantly drop out of the Engagement Program."
            },
            {
                "id": "q58",
                "text": "What is the purpose of the \"Test\" tab in Engagement Studio?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "To send test emails to your team."
                    },
                    {
                        "id": "B",
                        "text": "To simulate a prospect's journey through the program by selecting \"Yes\" or \"No\" path choices, ensuring the logic flows correctly before starting the program."
                    },
                    {
                        "id": "C",
                        "text": "To run A/B tests on program elements."
                    },
                    {
                        "id": "D",
                        "text": "To test the Salesforce connector integration."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- The Test tab provides an interactive simulation allowing the marketer to test logic and timing paths before launching the program."
            },
            {
                "id": "q59",
                "text": "A marketer wants to adjust a prospect's score based on their interaction in an Engagement Studio program. Which element allows them to \"Adjust Prospect Score\"?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "Rule"
                    },
                    {
                        "id": "B",
                        "text": "Trigger"
                    },
                    {
                        "id": "C",
                        "text": "Action"
                    },
                    {
                        "id": "D",
                        "text": "Evaluation"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "- Adjusting a prospect score is an Action step in Engagement Studio."
            },
            {
                "id": "q60",
                "text": "An Engagement Program uses a dynamic list as its recipient list. A prospect on the list matches the criteria and enters the program. While they are on a 5-day wait step, they no longer meet the criteria of the dynamic list. What happens to the prospect?",
                "type": "single",
                "options": [
                    {
                        "id": "A",
                        "text": "They are removed from the dynamic list and remain in the program."
                    },
                    {
                        "id": "B",
                        "text": "They are removed from the dynamic list and immediately drop out of the Engagement Program."
                    },
                    {
                        "id": "C",
                        "text": "They finish the wait step and then drop out."
                    },
                    {
                        "id": "D",
                        "text": "They complete the entire program."
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "- If a prospect drops off the dynamic recipient list while in an Engagement Program, they are immediately removed from the program and will not complete the wait step or any subsequent steps."
            }
        ]
    }
];

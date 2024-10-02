




# Credit Decision











## Endpoints:






```{eval-rst}


- :httpmethod-small-post:`POST` :ref:`post-credit-decision`

..

..

- :httpmethod-small-get:`POST` :ref:`Dividend/GenerateDividendDetails <generate-dividend-details>`

..

..


```




```{eval-rst}

.. _post-credit-decision:



:httpmethod:`POST` /credit-decision
===================================
```





### Description:


Make a credit decision based on customer data.


**Description:** This endpoint evaluates customer data to make a credit approval decision.


**OperationID:** creditDecision



#### Query Parameters:


```{eval-rst}

.. parameter-item:: account_id
   :type: string
   :requirement: required

   Unique identifier for the customer's account.

   e.g., "10000"

.. parameter-item:: order_id
   :type: string
   :requirement: required

   Unique identifier for the credit application order.

   e.g., "32131231231241"

.. parameter-item:: customer_ip
   :type: string
   :requirement: required

   The IP address of the customer making the credit request.

   [IPv4 Format]: Standard IPv4 address notation.

   e.g., "1.1.1.1"

.. parameter-item:: card_holder_name
   :type: string
   :requirement: required

   Full name of the credit card holder.

   e.g., "John Doe von Soap"

.. parameter-item:: ssn
   :type: string
   :requirement: required

   Social Security Number of the customer.

   [Format:] 9 digits, no dashes.

   e.g., "123456789"

.. parameter-item:: dob
   :type: string
   :requirement: required

   Date of birth of the customer.

   [ISO 8601 Format]: YYYY-MM-DD (Year-Month-Day).

   e.g., "1979-08-02"

.. parameter-item:: card_holder_email
   :type: string
   :requirement: required

   Email address of the cardholder.

   e.g., "email@example.com"


```



#### Example Request:


```bash

   curl --silent --location '{{baseurl}}/credit-decision' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {{your_api_key}}' \
  --data '{
    "account_id": "10000",
    "order_id": "32131231231241",
    "customer_ip": "1.1.1.1",
    "card_holder_name": "John Doe von Soap",
    "ssn": "123456789",
    "dob": "1979-08-02",
    "card_holder_email": "email@example.com"
  }'
```

```{eval-rst}

:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


```
####  Request Body:





#### Example Request:


**content/type:** application/json




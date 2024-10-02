Shareholder
=============

Resource and endpoints for Shareholder related operations.


Endpoints:
-----------



- :httpmethod-small-post:`POST` :ref:`Shareholder/CreateOrUpdate <post-shareholder-create-or-update>`

..

..

- :httpmethod-small-get:`GET` :ref:`Shareholder/Details <get-shareholder-details>`

..

..

- :httpmethod-small-get:`GET` :ref:`Shareholder/GetHoldingSummary <get-shareholder-holding-summary>`

..

..


.. _post-shareholder-create-or-update:


:httpmethod:`POST` Shareholder/CreateOrUpdate
----------------------------------------------


Possible Actions:
~~~~~~~~~~~~~~~~~~

* Create a new Shareholder, or 

* Update an existing Shareholder.


Request Body:
~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst


.. include:: definitions/createdByEmail_required.rst

.. include:: definitions/createdByFirstName_required.rst

.. include:: definitions/createdByLastName_required.rst



.. include:: definitions/customerShareholderId_optional.rst

.. include:: definitions_2/name_required.rst

.. include:: definitions/name2_optional.rst

.. include:: definitions/name3_optional.rst

.. include:: definitions/sortName_required.rst

.. include:: definitions/accountType_optional.rst

.. include:: definitions/primaryPayeeName_required.rst

.. include:: definitions/primaryTaxId_required.rst

.. include:: definitions/primaryTaxIdType_required.rst

.. include:: definitions/secondaryPayeeName_optional.rst

.. include:: definitions/secondaryTaxId_optional.rst

.. include:: definitions/secondaryTaxIdType_optional.rst


.. include:: definitions/mailingAddress_optional.rst

.. include:: definitions/primaryAddress_required.rst




Primary (or Mailing) Address Child Attributes:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/address1_required.rst

.. include:: definitions/address2_optional.rst

.. include:: definitions/city_required.rst

.. include:: definitions/state_required.rst

.. include:: definitions/postalCode_required.rst

.. include:: definitions/country2Code_required.rst

.. include:: definitions/createdByEmail_required.rst

.. include:: definitions/phone_required.rst

.. include:: definitions/secondaryPhone_required.rst
    


Example Request:
~~~~~~~~~~~~~~~~

.. code-block:: bash
    
    curl --silent --location 'https://sandboxapi.transfersolo.com/api/v1/Shareholder/CreateOrUpdate' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer <YOUR TOKEN>' \
    --header 'Type: text/plain' \
    --data-raw '{
        "CreatedByEmail": "john.dooe@test.org",
        "createdByFirstName": "John",
        "createdByLastName": "Do",
        "customerShareholderId": "Shrhld-00001",
        "sortName": "Sebto Kmarouaney",
        "name": "Kmarouaney Sebto",
        "name2": "Fara Hguessous",
        "name3": "",
        "accountType": "JointTenant",
        "primaryTaxId": "333-22-1111",
        "primaryTaxIdType": "SSN",
        "primaryPayeeName": "Kmarouaney Sebto",
        "secondaryTaxId": "111-22-3333",
        "secondaryTaxIdType": "SSN",
        "secondaryPayeeName": "Fara Hoguessous",
        "primaryAddress": {
            "address1": "287 Maple Street",
            "address2": "",
            "city": "Aloha",
            "state": "Oregon",
            "postalCode": "97330",
            "country2Code": "US",
            "email": "fara.hoguessous@gmail.com",
            "phone": "+1-369-644-7405",
            "secondaryPhone": "+1-191-173-9126"
        },
        "mailingAddress": {
            "address1": "24 Luradel Drive",
            "address2": "",
            "city": "Portland",
            "state": "Oregon",
            "postalCode": "97330",
            "country2Code": "US",
            "email": "kmarouaney.sebto@sample.net",
            "phone": "+1-994-399-3071",
            "secondaryPhone": "+1-437-394-2155"
        }
    }'

    
:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. does action always say "New" or can it say "Update" as well? 
.. it will say whatever the action performed is, so, update will be update, new will be new. 

.. code-block:: json 

   {
    "action": "Update",
    "customerShareholderId": "Shrhld-00001",
    "systemShareholderId": 28599
    }

.. Response Definitions:
.. ~~~~~~~~~~~~~~~~~~~~~~
.. .. include:: definitions/action.rst
.. .. include:: definitions/customerShareholderId.rst 
.. .. include:: definitions/systemShareholderId.rst




.. _get-shareholder-details:

:httpmethod-medium-get:`GET` Shareholder/Details
--------------------------------------------------


Description:
~~~~~~~~~~~~~~~~

.. try rewording this.

Retrieves detailed information about specified Shareholder:



Query Parameters:
~~~~~~~~~~~~~~~~~~

.. Below are the two required parameters.


.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerShareholderId_required.rst




  
Example Request:
~~~~~~~~~~~~~~~~
.. code-block:: bash

    curl --silent --location --request GET 'https://sandboxapi.transfersolo.com/api/v1/Shareholder/Details?CustomerShareholderId=T5914714658&SystemShareholderId=0' \
    --header 'grant_type: client_credentials' \
    --header 'client_id: {{clentId}}' \
    --header 'client_secret: {{clientsecret}}' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --header 'Type: text/plain' \
    --header 'Authorization: Bearer <YOUR TOKEN>' \
    --data-urlencode 'grant_type=client_credentials' \
    --data-urlencode 'client_id={{clentId}}' \
    --data-urlencode 'client_secret={{clientsecret}}'



:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    {
    "sortName": "Thomas Morgan",
    "customerShareholderId": "T5914714658",
    "systemShareholderId": 28596,
    "displayShareholderId": "T5914714658",
    "name": "Morgan Thomas Leah Ramirez",
    "fullPrimaryAddress": "944 Oak Drive\nMedford, Oregon 97330\nUnited States",
    "primaryAddress": {
        "address1": "944 Oak Drive",
        "address2": "",
        "city": "Medford",
        "state": "Oregon",
        "postalCode": "97330",
        "country2Code": "US",
        "email": "morgan.thomas@sample.net",
        "phone": "+1-205-491-7350",
        "secondaryPhone": "+1-151-172-2162",
        "country": "United States"
    },
    "fullMailingAddress": "880 Pine Court\nEugene, Oregon 97330\nUnited States",
    "mailingAddress": {
        "address1": "880 Pine Court",
        "address2": "",
        "city": "Eugene",
        "state": "Oregon",
        "postalCode": "97330",
        "country2Code": "US",
        "email": "morgan.thomas@sample.net",
        "phone": "+1-672-821-9614",
        "secondaryPhone": "+1-134-901-8681",
        "country": "United States"
    },
    "type": "Individual",
    "primaryTaxId": "209566819",
    "primaryTaxIdType": "SIN",
    "primaryPayeeName": "Morgan Thomas",
    "secondaryTaxId": "",
    "secondaryTaxIdType": "SSN",
    "secondaryPayeeName": "Leah Ramirez"
    }







.. _get-shareholder-holding-summary:


:httpmethod:`GET` Shareholder/GetHoldingSummary
--------------------------------------------------

Description:
~~~~~~~~~~~~~~

Retrieves summary of holdings for specified Shareholder.


Query Parameters:
~~~~~~~~~~~~~~~~~

.. include:: definitions/initial_parameter_bar.rst

.. include:: definitions/customerIssuerId_required.rst

.. include:: definitions/customerShareholderId_required.rst





Example Request:
~~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl --silent --location 'https://sandboxapi.transfersolo.com/api/v1/Shareholder/GetHoldingSummary?customerShareholderId=111144&customerIssuerId=1128' \
        --header 'grant_type: client_credentials' \
        --header 'client_id: {{clentId}}' \
        --header 'client_secret: {{clientsecret}}' \
        --header 'Authorization: Bearer <YOUR TOKEN>'
            


:httpmethod-good-response-medium:`200` Response:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: json

    [
    {
        "securityTypeId": 1,
        "security": "Common",
        "shares": 9,
        "sharesFormat": "9",
        "numberOfCertificates": 2,
        "numberOfCertificatesFormat": "2",
        "hasBookCertificates": false
    },
    {
        "securityTypeId": 2,
        "security": "Warrant",
        "shares": 4,
        "sharesFormat": "4",
        "numberOfCertificates": 1,
        "numberOfCertificatesFormat": "1",
        "hasBookCertificates": true
    },
    {
        "securityTypeId": 6,
        "security": "Preferred",
        "shares": 250,
        "sharesFormat": "250",
        "numberOfCertificates": 1,
        "numberOfCertificatesFormat": "1",
        "hasBookCertificates": true
    }
    ]
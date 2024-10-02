.. _detailed-parameter-options:



===============================
Expanded Attributes and Options
===============================

The **Expanded Attributes and Options** section is designed to elaborate on the following:

* Child attribute options,
* Parent attribute options.

This section aims to provide detailed information on parameter options that were too extensive to include in the main resource documentation.


.. _filterSecurityType:



FilterSecurityType (and SecurityType) Expanded:
#################################################

**Description**: Allows you to filter results based on the type and series of securities.

**Data Type**: Object, containing fields `SecurityTypeCode` and `SecuritySeriesCode`.

.. note:: Child attributes for **FilterSecurityType** and **SecurityType** are identical. Their use depends on the endpoint. 


Options for FilterSecurityType
------------------------------


Child Attribute: **SecurityTypeCode** 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


- `""` (empty string): All Securities
- `"C"`: Common stocks
- `"P"`: Preferred stocks
- `"W"`: Warrants
- `"U"`: Units
- `"B"`: Bonds
- `"D"`: Debentures
- `"M"`: Interests
- `"N"`: Notes
- `"O"`: Options

Child Attribute: **SecuritySeriesCode**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- `""` (empty string): No series specified
- `"A"`: Series A
- `"B"`: Series B
- `"C"`: Series C
- Etc. 


FiterSecurityType Example Usage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: json 


    {
        "FilterSecurityType": {
            "SecurityTypeCode": "C",
            "SecuritySeriesCode": "A"
        }
    }




.. _labelType:

labelType
---------




**Description**: Allows you to filter results based on the type of label.


**Data Type**: String.

.. note:: Examples can be found on the `Avery Website <https://www.avery.com/templates>`_

labelType Options
-----------------

"labelType":"AVERY5159,AVERY5160,AVERY5161,AVERY5162,AVERY5163,
            AVERY5164,AVERY5260,AVERY5261,AVERY5262,AVERY5263,
            AVERY5264,AVERY5266,AVERY5660,AVERY5661,AVERY5662,
            AVERY5663,AVERY5664,AVERY5920,AVERY5922,AVERY5923,
            AVERY5930,AVERY5932,AVERY5960,AVERY5961,AVERY5962,
            AVERY5963,AVERY5966,AVERY5970,AVERY5971,AVERY5972,
            AVERY5979,AVERY5980,AVERY8160,AVERY8161,AVERY8162,
            AVERY8163,AVERY8164,AVERY8250,AVERY8460,AVERY8462,
            AVERY8463,AVERY8660,AVERY8662,AVERY8663,AVERY8920,
            AVERY8922,AVERY8923,AVERY8930,AVERY8932" 



.. note:: For example, `AVERY5261 <https://www.avery.com/templates/5261>`_


    
 
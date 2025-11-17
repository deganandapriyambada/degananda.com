in order to be able to track actual sparepart and man hour consumption, its important to understand how SAP record the planned sparepart and man hours in form of bill of material, work center and work order.

# Equipment's Bill of Material (BOM)

in SAP, bill of material is a **structure of a product which is formed from one or many component** regardless whether it can be stored on storage or not.

these components are tied to one specific product and each of the prouduct can have different bill of material. Meaning different component structure which compose the product.

&mdash; both of equipment and functional location (technical object) has an associated BOM.

However, bill of material on context of SAP PM (plant maintenance) can mean two things as shown in following explanation.

## Asset Structure

in case a specific damage recording on the physical asset is needed, the component of those physical asset can be structurized as bill of material on SAP PM.

for example, a pump has three main component parts such as : motor, shaft and control electronic. 

These structure can be registered on SAP PM. So, when a failure happen on one or more specific component of the pump, it can be assigned specifically on that bill of material.

## Sparepart Composition

determine the spare part used to maintain the physical assets.

## Three types of BOM

    this type of BOM is tied or assigned to technical object master data.

there are three types of bill of material in context of SAP PM

**equipment's BOM** - Spare part that belong to specific physical equipment. it directly linked to individual equipment master data.

## Task List BOM
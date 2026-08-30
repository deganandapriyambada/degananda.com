# The Needs of OPC Translator into Firewall Friendly Protocol

OPC DA protocol which based on windows DCOM can listened through various tools (opensources or paid software / enterprise licenses) including OPC tunneller and protocol gateway. Both of the software responsible for the protocol translation so that it can pass through firewall in friendly manners. Eventhough normal DCOM can pass firewall, its not a practical approach as we have to open hundreds of port due to the DCOM dynamics port assignment during the networking stage.

NodeRED has the most minimum entry barrier compared to other OPC DA protocol translation solutions because it offer opensource licenses (can be used for commercial purposes without paying a single penny) and low code configuration. On low throughput scenario (< 10K tags) nodered can handle it flawlessly with correct specifications (OPC DA reading is CPU intensive, it require strong processor) and distributed pooling strategy. 

However, when it comes to other aspects than data acquisition, nodered based solution will face a limitation including asset contextualization and condition based monitoring or alarm. Its not recommended to execute non data acquisition task on nodered because its not designed for big data processing (ETL/ELT). Nodered should only be used to capture data from OPC DA and route it towards L4 message broker.

# Spin Up NodeRED for OPC DA Data Acquisition

Below are the steps to install and configure nodered workflow to read OPC DA 

## Install Nodered on Legacy OS

a
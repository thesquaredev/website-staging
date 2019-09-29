---
##
# This markdown file will render a "quartet" component, which shows a grid with exactly 4 tiles. It is used to explain
# a process with 4 stages. The following properties may be set (properties with * are required, to leave a property blank 
# use ''):
#
# template*: The page template to use, leave it "default" if not sure
# component*: The React component to use (here is "quartet")
# heading: The title of the section
# description: The subtitle of the section
# image: The icon to use at the center of the component
##
template: default
component: quartet
heading: Performing models attribute their success to structured workflows
description: Let us demonstrate our process
image: plane-trip-round-bold-red.png
#
# HOW TO USE TEXT BELOW:
#
# Each H1 header (rows starting with #) becomes the tile's title
# Each H2 header (rows starting with ##) becomes the tile's icon
# Each paragraph (rows with just text) becomes the tile's main text
##
---

# <sup>_1_ _</sup> Gather and prepare data
## database-share-bold-blue.png

Data preparation is one of the most important aspects of building a model. Quality of results is dictated by the
quality of data. Analysis, feature engineering, cleaning, scaling and other methods are used to increase data quality.

---

# <sup>_2_ _</sup> Train model
## database-network-bold-red.png

After data has been prepared the model (the unit that actually makes the prediction) need to be built. State of the art 
tools are used for this like Tensorflow.

---

# <sup>_3_ _</sup> Evaluate and deploy
## analytics-bold-blue.png

The model is then evaluated with testing data and is improved until it is ready for production. Deployment can happen on a serve or if the architecture allows, on an edge node.

---

# <sup>_4_ _</sup> Monitor and improve
## brain-bold-green.png


Constant improvement of the model is crucial to is success. Our techniques include existing model enhancement, real-time training, and CI/CD pipelines to re-deploy models on the fly.

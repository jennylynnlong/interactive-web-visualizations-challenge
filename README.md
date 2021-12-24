# Interactive Web Visualizations Challenge

## Details About the Challenge
This assignment was designed to challenge me to build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

## Plotly
1. In the [Javascript file](/static/js/app.js), use the D3 library to read in [samples.json](/samples.json).
   - ![image](https://user-images.githubusercontent.com/88349512/147302498-f477ed14-3bea-4d2f-9543-821bbdef5375.png)

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
   - Use sample_values as the values, otu_ids as the labels, and otu_labels as the hovertext for the bar chart.
     - ![image](https://user-images.githubusercontent.com/88349512/147301869-55a9c780-ffad-4872-9e99-540f0db08704.png)
     - ![image](https://user-images.githubusercontent.com/88349512/147301707-dbabfb44-acbf-4987-aa01-ac97a9968898.png)

3. Create a bubble chart that displays each sample.
   - Use otu_ids for the x values, sample_values for the y values, sample_values for the marker size, otu_ids for the marker colors, and otu_labels for the text values.
     - ![image](https://user-images.githubusercontent.com/88349512/147301930-f97b8c89-0576-42bb-a6b2-2a2ddb4675fe.png)
     - ![image](https://user-images.githubusercontent.com/88349512/147301975-49fe9923-d1fd-40b2-b138-30ef70b380c6.png)
4. Display the sample metadata, i.e., an individual's demographic information. Display each key-value pair from the metadata JSON object somewhere on the page.
   - ![image](https://user-images.githubusercontent.com/88349512/147302279-e3424a20-6c56-4cc5-9143-cc95c43b363d.png)
     - ![image](https://user-images.githubusercontent.com/88349512/147302287-6c5d52ac-8f78-430b-a491-60c83afcae34.png)

5. Update all of the plots any time that a new sample is selected.
   - ![image](https://user-images.githubusercontent.com/88349512/147302233-d5eb6619-8a4a-46ba-8f89-e5adfa4d5bbf.png)
     - ![image](https://user-images.githubusercontent.com/88349512/147302309-c9a6e41a-51fe-4e79-beb4-2992c2cbb1bc.png)

6. Deploy app to a [GitHub page](https://jennylynnlong.github.io/interactive-web-visualizations-challenge/).
   - ![image](https://user-images.githubusercontent.com/88349512/147302943-eac39c5f-d962-4a3a-b9d5-f8d139d3743d.png)

## How to Run the Code
1. Pull the files from this repository
2. Open the files in VS Code.
3. Open [index.html](/index.html) file with Live Server to launch web browser.
4. Select various test subject ID numbers from the dropdown to see their respective data.
   - ![image](https://user-images.githubusercontent.com/88349512/147302309-c9a6e41a-51fe-4e79-beb4-2992c2cbb1bc.png)
5. Alternatively, you can just click the Bellybutton Biodiversity webpage [here](https://jennylynnlong.github.io/interactive-web-visualizations-challenge/).

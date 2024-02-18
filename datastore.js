// STORE is our database.
// It's an object literal with two properties: 'progress' and 'questions'. 
// The value of 'progress' is an object with two key/val pairs: the current question and the score.
// The value of 'QA' is an array with objects that contain a question str prop, answers array, and another prop with the index of the correct answer

const STORE = {
    progress: {
        questionNum: 1, 
        score: 0
    },
    QA: [
        {
            question: 'You are creating a model to predict housing prices. Due to budget constraints, you must run it on a single resource-constrained virtual machine. Which learning algorithm should you use?',
            answers: ['Linear regression',
                      'Logistic classification', 
                      'Recurrent neural network', 
                      'Feedforward neural network'],
            correct: 0
        }, 
        {
            question: 'You are building new real-time data warehouse for your company and will use Google BigQuery streaming inserts. There is no guarantee that data will only be sent in once but you do have a unique ID for each row of data and an event timestamp. You want to ensure that duplicates are not included while interactively querying data. Which query type should you use?',
            answers: ['Include ORDER BY DESK on timestamp column and LIMIT to 1',
                      'Use GROUP BY on the unique ID column and timestamp column and SUM on the values.', 
                      'Use the LAG window function with PARTITION by unique ID along with WHERE LAG IS NOT NULL.', 
                      'Use the ROW_NUMBER window function with PARTITION by unique ID along with WHERE row equals 1.'],
            correct: 3
        },
        {  question: 'Your company is using WHILECARD tables to query data across multiple tables with similar names. The SQL statement is currently failing with the following error: # Syntax error : Expected end of statement but got \'-\' at [4:11] SELECT age FROM bigquery-public-data.noaa_gsod.gsod WHERE age != 99        AND_TABLE_SUFFIX = \'1929\' ORDER BY age DESC        Which table name will make the SQL statement work correctly?',
            answers: ['\'bigquery-public-data.noaa_gsod.gsod\'',
                      'bigquery-public-data.noaa_gsod.gsod*', 
                      '\'bigquery-public-data.noaa_gsod.gsod\'*', 
                      '\'bigquery-public-data.noaa_gsod.gsod*\''],
            correct: 1
        }, 
        {
            question: 'Which are adjusted on each epoch in a machine learning training session?',
            answers: ['features and hyperparameters',
                      'learning rate and number of hidden layers', 
                      'weights and features', 
                      'weights and biases'],
            correct: 3
        },
        {
            question: 'What’s an accurate distinction between BigQuery and Bigtable?',
            answers: ['Bigtable is a distributed key-value store; BigQuery queries that store',
                      'BigQuery is underneath Google Search; Bigtable is underneath Google Sheets', 
                      'Bigtable is for OLTP; BigQuery is best for OLAP', 
                      'BigQuery is managed MapReduce; Bigtable is managed MySQL'],
            correct: 2
        }, 
        {
            question: 'Which of these best describes the overall architecture of Cloud Spanner?',
            answers: ['Sharding data and storing it on node clusters',
                      'Distributed compute, shared and consistent storage', 
                      'Distributed compute, distributed storage', 
                      'None of these options'],
            correct: 1
        },
        {
            question: 'What’s Google Cloud Storage?',
            answers: ['A blob/object store for all data types and formats, focusing on unstructured data',
                      'A space for storing game state, user profiles, or product catalogues', 
                      'A highly-available, global and low-latency relational database', 
                      'A collaborative space for storing, sharing and editing files'],
            correct: 0
        },
        {
            question: 'Which of these is a good use case for Cloud SQL?',
            answers: ['Managing relational data when horizontal scalability is unneeded',
                      'Dealing with unstructured data when you don’t need mobile SDKs', 
                      'Doing analytics on structured, non-relational data, when you don’t need any Mobile SDKs', 
                      'Migrating existing Hadoop/Spark workloads to the GCP ecosystem'],
            correct: 0
        }, 
        {
            question: 'Which service should you use to order, process and pass along ingested messages?',
            answers: ['Dataproc',
                      'Bigtable', 
                      'Dataflow', 
                      'Dataprep'],
            correct: 2
        },
        {
            question: 'How should you migrate your existing Hadoop workloads to a managed service?',
            answers: ['Use a Transfer Appliance to get the data into BigQuery',
                      'Bigtable is the answer. Use Transfer Service and then deal with it there', 
                      'Build a ML model in ML Engine to predict the correct course of action', 
                      'Use Dataproc'],
            correct: 3
        }
    ]
}
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
 
  MainSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'intro',
          label: 'What is RisingWave?',
        },
        
        {
          type: 'doc',
          id: 'architecture',
          label: 'Architecture',
        }
      ]
    },

    {
      type: 'doc',
      id: 'get-started',
      label: 'Get started',
    },
    
    {
      type: 'category',
      label: 'Tutorials',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'tutorials/perform-real-time-ad-performance-analysis',
          label: 'Perform real-time ad performance analysis',
        },
      ]
    },

    {
      type: 'category',
      label: 'How-to guides',
      collapsible: true,
      collapsed: false,
      items: 
      [ 
        {type: 'category', 
        label: 'Connect to a streaming source', 
        link: {type: 'doc', id: 'sql/commands/create-source'},
        items: [
          'sql/create-source/create-source-kafka-redpanda', 'sql/create-source/create-source-pulsar', 'sql/create-source/create-source-kinesis', 'sql/create-source/create-source-cdc'
        ]
        }
      
      ]
    },

  {
    type: 'category',
    label: 'SQL reference',
    collapsible: true,
    collapsed: false,
    items: 
    ['sql/sql-data-types', 
      {
      type: 'category',
      label: 'Functions and operators',
      items: 
        [
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-logical',
            label: 'Logical',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-comparison',
            label: 'Comparison',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-mathematical',
            label: 'Mathematical',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-bitstring',
            label: 'Bit string',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-string',
            label: 'String',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-datetime',
            label: 'Date/time',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-aggregate',
            label: 'Aggregate',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-conditional',
            label: 'Conditional',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-value',
            label: 'Value',
          },
        
        ]
        },
      {
      type: 'category',
      label: 'Commands',
      items: 
        [
          {
            type: 'autogenerated',
            dirName: 'sql/commands',
          },
        
        ]
        },
      ],
    },

    {
      type: 'doc',
      id: 'release-notes',
      label: 'Release notes'
      },
    ]
    
};


module.exports = sidebars;

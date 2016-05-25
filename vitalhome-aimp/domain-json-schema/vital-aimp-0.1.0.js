if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_aimp_0_1_0_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-aimp",
  "name" : "vital-aimp-0.1.0",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#AIMPDevice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ActivateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#ActivateMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#ActivateMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#ActivateMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Answer",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#Answer",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#Answer",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#Answer" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AnswerChoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#AnswerChoice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#AnswerChoice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#AnswerChoice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#isAnswerSkipped" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#AnswerMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#AnswerMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#AnswerMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#AnswerMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#BB8Device",
    "parent" : "http://vital.ai/ontology/vital-aimp#SpheroDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#BB8Device",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#BB8Device",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#BB8Device" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#BinaryMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#BinaryMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#BinaryMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#BinaryMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#ChatMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#ChatMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#ChatMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#ChatMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasChatMessage" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Choice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#Choice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#Choice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#Choice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasChoiceLabel" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasChoiceValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#CommandMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#CommandMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeactiveMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeactiveMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeactiveMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeactiveMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceActivateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceActivateMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceActivateMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceActivateMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceDeactivateMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceMotionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceMotionMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceMotionMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceMotionMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceSettingMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceSettingMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceSettingMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceSettingMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#DeviceStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#DeviceMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#DeviceStatusMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#DeviceStatusMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#DeviceStatusMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyArticleMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyCommandMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasCommand" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyDialogAppMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyDialogAppMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyDialogAppMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyImageMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyImageMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyImageMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyMapMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyMapMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyMapMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDirectionsEndAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDirectionsJSONResponse" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasDirectionsStartAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasNeLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasNeLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSwLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasSwLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasZoomLevel" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyQuestionDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyQuestionDialogAppMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyQuestionDialogAppMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyQuestionDialogAppMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyStatusMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyTextMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyTextMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyTextMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasAddress" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasLatitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasLongitude" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSearchString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasWeatherJSONResponse" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#HueLightDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#LightDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#HueLightDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#HueLightDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#HueLightDevice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#InformationMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#InformationMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#InformationMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#InformationMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#JiboDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#JiboDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#JiboDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#JiboDevice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#LightDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#LightDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#LightDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#LightDevice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#MotionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#MotionMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#MotionMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#MotionMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "parent" : "http://vital.ai/ontology/vital#VITAL_Fact",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#PropertyFact",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#PropertyFact",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#PropertyFact" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#isEnabled" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasPropertyValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Question",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#Question",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#Question",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#Question" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#QuestionMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#QuestionMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#QuestionMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#QuestionMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#RobotDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#RobotDevice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#Session",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#Session",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#Session",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#Session" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasBotID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SettingsMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#SettingsMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#SettingsMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#SettingsMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SpeechMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#BinaryMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#SpeechMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#SpeechMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#SpeechMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SpheroDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#RobotDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#SpheroDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#SpheroDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#SpheroDevice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#StatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#CommandMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#StatusMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#StatusMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#StatusMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "parent" : "http://vital.ai/ontology/vital-aimp#AIMPDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#SwitchDevice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHelpRequested" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isQuestionClosed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserCommandMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserCommandMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasCommand" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserDialogAppMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isAnswerSkipped" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHelpRequested" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isQuestionClosed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserLeftApp",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserLeftApp",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserLeftApp",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserLeftApp" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserLoggedIn",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserLoggedIn",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserLoggedIn",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserLoggedIn" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserLoggedOut",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserLoggedOut",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserLoggedOut",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserLoggedOut" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserProfile",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserProfile",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserProfile",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserProfile" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserProfileMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserProfileMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserProfileMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserProfileMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserStatusMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserStatusMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserStatusMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserStatusMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "parent" : "http://vital.ai/ontology/vital-aimp#HaleyMessage",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#UserTextMessage",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#UserTextMessage" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-aimp#hasRequestURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasTextToSpeak" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#hasUserName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-aimp#isHistoryMessage" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-aimp#isReplyTo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-aimp#WeMoSwitch",
    "parent" : "http://vital.ai/ontology/vital-aimp#SwitchDevice",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-aimp#WeMoSwitch",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-aimp#WeMoSwitch",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-aimp#WeMoSwitch" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ],
    "shortName" : "address",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasBotID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "botID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChatMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#ChatMessage" ],
    "shortName" : "chatMessage",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChoiceLabel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Choice" ],
    "shortName" : "choiceLabel",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasChoiceValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#Choice" ],
    "shortName" : "choiceValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasCommand",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyCommandMessage", "http://vital.ai/ontology/vital-aimp#UserCommandMessage" ],
    "shortName" : "command",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsEndAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "directionsEndAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsJSONResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "directionsJSONResponse",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasDirectionsStartAddress",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "directionsStartAddress",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "imageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ],
    "shortName" : "latitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLongDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage" ],
    "shortName" : "longDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ],
    "shortName" : "longitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNeLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "neLatitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasNeLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "neLongitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPropertyName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PropertyFact" ],
    "shortName" : "propertyName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPropertyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#PropertyFact" ],
    "shortName" : "propertyValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasPublicationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "publicationDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasRequestURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AIMPMessage" ],
    "shortName" : "requestURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSearchString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage", "http://vital.ai/ontology/vital-aimp#HaleyMapMessage", "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ],
    "shortName" : "searchString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSessionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage", "http://vital.ai/ontology/vital-aimp#Session" ],
    "shortName" : "sessionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasShortDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "shortDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyStatusMessage", "http://vital.ai/ontology/vital-aimp#UserStatusMessage" ],
    "shortName" : "status",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSwLatitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "swLatitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasSwLongitude",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "swLongitude",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage", "http://vital.ai/ontology/vital-aimp#Question" ],
    "shortName" : "text",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTextToSpeak",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage" ],
    "shortName" : "textToSpeak",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "thumbnailImageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "title",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasUrl",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyArticleMessage", "http://vital.ai/ontology/vital-aimp#HaleyImageMessage" ],
    "shortName" : "url",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasUserID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage", "http://vital.ai/ontology/vital-aimp#Session", "http://vital.ai/ontology/vital-aimp#UserProfile" ],
    "shortName" : "userID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasUserName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage", "http://vital.ai/ontology/vital-aimp#UserProfile" ],
    "shortName" : "userName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasWeatherJSONResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyWeatherMessage" ],
    "shortName" : "weatherJSONResponse",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#hasZoomLevel",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMapMessage" ],
    "shortName" : "zoomLevel",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isAnswerSkipped",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#AnswerChoice", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "answerSkipped",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isHelpRequested",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "helpRequested",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isHistoryMessage",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage" ],
    "shortName" : "historyMessage",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isQuestionClosed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage", "http://vital.ai/ontology/vital-aimp#UserDialogAppMessage" ],
    "shortName" : "questionClosed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-aimp#isReplyTo",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-aimp#HaleyMessage" ],
    "shortName" : "replyTo",
    "multipleValues" : false,
    "type" : "URIProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(vital_aimp_0_1_0_schema);
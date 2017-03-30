# Structure for Database Interaction and Saving

## The Structure

The whole project should be able to be represented in a JSON Object. For example:

```
{
  "id": 2,
  "name": "An ice sculpture",
  "issueFor": "Pro",
  "issueAgainst": "Con",
  "groupType1": [
    {
      "item1": "value1"
    }
  ]
  "groupType2": [
    {
      "item1": "value1"
    }
  ]
}
```

## Saving

This would require simply write out and reading in a JSON string
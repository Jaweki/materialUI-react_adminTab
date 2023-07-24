const labelColor = {
  "riceColor": "hsl(91, 70%, 50%)",
  "ugaliColor": "hsl(150, 70%, 50%)",
  "chapatiColor": "hsl(190, 70%, 50%)",
  "beansColor": "hsl(72, 70%, 50%)",
  "vegstewColor": "hsl(243, 70%, 50%)",
  "teaColor": "hsl(315, 70%, 50%)"
}

export const mockBarData = [
  {
    "POS": "TAB1",
    "rice": 2,
    "riceColor": labelColor.riceColor,
    "ugali": 12,
    "ugaliColor": labelColor.ugaliColor,
    "chapati": 10,
    "chapatiColor": labelColor.chapatiColor,
    "beans": 10,
    "beansColor": labelColor.beansColor,
    "vegstew": 12,
    "vegstewColor": labelColor.vegstewColor,
    "tea": 90,
    "teaColor": labelColor.teaColor
  },
  {
    "POS": "TAB2",
    "rice": 5,
    "riceColor": labelColor.riceColor,
    "ugali": 16,
    "ugaliColor": labelColor.ugaliColor,
    "chapati": 50,
    "chapatiColor": labelColor.chapatiColor,
    "beans": 20,
    "beansColor": labelColor.beansColor,
    "vegstew": 12,
    "vegstewColor": labelColor.vegstewColor,
    "tea":70,
    "teaColor": labelColor.tea
  },
  {
    "POS": "TAB3",
    "rice": 5,
    "riceColor": labelColor.riceColor,
    "ugali": 16,
    "ugaliColor": labelColor.ugaliColor,
    "chapati": 50,
    "chapatiColor": labelColor.chapatiColor,
    "beans": 20,
    "beansColor": labelColor.beansColor,
    "vegstew": 12,
    "vegstewColor": labelColor.vegstewColor,
    "tea":70,
    "teaColor": labelColor.teaColor
  },
  {
    "POS": "TAB4",
    "rice": 5,
    "riceColor": labelColor.riceColor,
    "ugali": 16,
    "ugaliColor": labelColor.ugaliColor,
    "chapati": 50,
    "chapatiColor": labelColor.chapatiColor,
    "beans": 20,
    "beansColor": labelColor.beansColor,
    "vegstew": 12,
    "vegstewColor": labelColor.vegstewColor,
    "tea":70,
    "teaColor": labelColor.teaColor
  },
  {
    "POS": "TAB5",
    "rice": 5,
    "riceColor": labelColor.riceColor,
    "ugali": 16,
    "ugaliColor": labelColor.ugaliColor,
    "chapati": 50,
    "chapatiColor": labelColor.chapatiColor,
    "beans": 20,
    "beansColor": labelColor.beansColor,
    "vegstew": 12,
    "vegstewColor": labelColor.vegstewColor,
    "tea":70,
    "teaColor": labelColor.teaColor
  },
  {
    "POS": "TAB6",
    "rice": 5,
    "riceColor": labelColor.riceColor,
    "ugali": 16,
    "ugaliColor": labelColor.ugaliColor,
    "chapati": 50,
    "chapatiColor": labelColor.chapatiColor,
    "beans": 20,
    "beansColor": labelColor.beansColor,
    "vegstew": 12,
    "vegstewColor": labelColor.vegstewColor,
    "tea":70,
    "teaColor": labelColor.teaColor
  },
  {
    "POS": "TAB7",
    "rice": 5,
    "riceColor": labelColor.riceColor,
    "ugali": 16,
    "ugaliColor": labelColor.ugaliColor,
    "chapati": 50,
    "chapatiColor": labelColor.chapatiColor,
    "beans": 20,
    "beansColor": labelColor.beansColor,
    "vegstew": 12,
    "vegstewColor": labelColor.vegstewColor,
    "tea":70,
    "teaColor": labelColor.teaColor
  }
];

export const mockLineData = [ // data collected at an increment of 12 minutes, for each of the food on the menu,
  {                           // at a given dinual period
    "id": "rice",
    "color": labelColor.riceColor,
    "data": [
      {
        "x": "12:00 pm",
        "y": 6
      },
      {
        "x": "12:25 pm",
        "y": 2
      },
      {
        "x": "12:50 pm",
        "y": 9
      },
      {
        "x": "01:15 pm",
        "y": 3
      },
      {
        "x": "01:40 pm",
        "y": 20
      },
      {
        "x": "02:05 pm",
        "y": 7
      },
      {
        "x": "02:30 pm",
        "y": 4
      }
    ]
  },
  {                           // at a given dinual period
    "id": "ugali",
    "color": labelColor.ugaliColor,
    "data": [
      {
        "x": "12:00 pm",
        "y": 3
      },
      {
        "x": "12:25 pm",
        "y": 2
      },
      {
        "x": "12:50 pm",
        "y": 9
      },
      {
        "x": "01:15 pm",
        "y": 3
      },
      {
        "x": "01:40 pm",
        "y": 5
      },
      {
        "x": "02:05 pm",
        "y": 2
      },
      {
        "x": "02:30 pm",
        "y": 0
      }
    ]
  },
  {
    "id": "chapati",
    "color": labelColor.chapatiColor,
    "data": [
      {
        "x": "12:00 pm",
        "y": 0
      },
      {
        "x": "12:25 pm",
        "y": 2
      },
      {
        "x": "12:50 pm",
        "y": 19
      },
      {
        "x": "01:15 pm",
        "y": 13
      },
      {
        "x": "01:40 pm",
        "y": 20
      },
      {
        "x": "02:05 pm",
        "y": 7
      },
      {
        "x": "02:30 pm",
        "y": 2
      }
    ]
  },
  {                           // at a given dinual period
    "id": "beans",
    "color": labelColor.beansColor,
    "data": [
      {
        "x": "12:00 pm",
        "y": 5
      },
      {
        "x": "12:25 pm",
        "y": 15
      },
      {
        "x": "12:50 pm",
        "y": 9
      },
      {
        "x": "01:15 pm",
        "y": 23
      },
      {
        "x": "01:40 pm",
        "y": 12
      },
      {
        "x": "02:05 pm",
        "y": 4
      },
      {
        "x": "02:30 pm",
        "y": 2
      }
    ]
  },
  {                           // at a given dinual period
    "id": "vegstew",
    "color": labelColor.vegstewColor,
    "data": [
      {
        "x": "12:00 pm",
        "y": 1
      },
      {
        "x": "12:25 pm",
        "y": 2
      },
      {
        "x": "12:50 pm",
        "y": 9
      },
      {
        "x": "01:15 pm",
        "y": 6
      },
      {
        "x": "01:40 pm",
        "y": 0
      },
      {
        "x": "02:05 pm",
        "y": 7
      },
      {
        "x": "02:30 pm",
        "y": 0
      }
    ]
  },
  {                           // at a given dinual period
    "id": "tea",
    "color": labelColor.teaColor,
    "data": [
      {
        "x": "12:00 pm",
        "y": 6
      },
      {
        "x": "12:25 pm",
        "y": 25
      },
      {
        "x": "12:50 pm",
        "y": 39
      },
      {
        "x": "01:15 pm",
        "y": 30
      },
      {
        "x": "01:40 pm",
        "y": 13
      },
      {
        "x": "02:05 pm",
        "y": 2
      },
      {
        "x": "02:30 pm",
        "y": 4
      }
    ]
  }
]
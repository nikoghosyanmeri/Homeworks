var data = [
    {
      id: 1,
      title: "Nature",
      img: "img/nature1.jpeg",
      info: [
        { img: "img/nature2.jpeg" },
        { img: "img/nature3.jpeg", },
        { img: "img/nature4.jpeg"}
      ]
    },
    {
      id: 2,
      title: "City",
      img: "img/city.jpg",
      info: [
        { img: "img/city1.jpg" },
        { img: "img/city2.jpg" },
        { img: "img/city3.jpg" }
      ]
    },
    {
      id: 3,
      title: "Animals",
      img: "img/animals.JPG",
      info: [
        { img: "img/elephant.jpg" },
        { img: "img/tiger.jpg" },
        { img: "img/zebra.jpg" }
      ]
    }
  ];

  var mainDiv = document.getElementById("main");
  var infoDiv = document.getElementById("info");

  for (var i = 0; i < data.length; i++) {
    var image = document.createElement("img");
    image.src = data[i].img;

    image.onclick = createClickFunction(data[i]);

    mainDiv.appendChild(image);
  }

  function createClickFunction(item) {
    return function() {
      showInfo(item);
    };
  }

  function showInfo(item) {
    infoDiv.innerHTML = "";

    for (var j = 0; j < item.info.length; j++) {
      var infoImage = document.createElement("img");
      infoImage.src = item.info[j].img;
      infoDiv.appendChild(infoImage);
    }
  }


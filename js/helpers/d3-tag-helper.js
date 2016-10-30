var D3TagHelper = function() {

  function getExtent(tags, key) {
    var arr = [];

    tags.map(function(tag) {
      var values = d3.extent(tag.readings, function(d) { return d[key]; });
      arr = arr.concat.apply(arr, values);
    });

    return d3.extent(arr);
  }

  var getExtents = function(tags, keys) {
    var extents = {};

    keys.map(function(key) {
      extents[key] = getExtent(tags, key);
    });

    return extents;
  };

  return {
    getExtents: function(tags, keys) {
      return getExtents(tags, keys);
    }
  };
}();

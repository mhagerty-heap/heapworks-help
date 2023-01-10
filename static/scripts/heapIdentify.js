setTimeout(function(){  // set a 1 second timeout to wait for heap to load, not a great way to do this, but it works for now
  // console.log('loaded heapIdentify.js query string code, checking if heapIdentity query string exists');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const heapIdentityQueryString = urlParams.get('heapIdentity');
  if (heapIdentityQueryString == null) {
    console.log("heapIdentity query string not found from referring domain; Heap Identity not set");
  } else {
    window.heap.identify(heapIdentityQueryString);
    console.log("heapIdentity query string found from referring domain");
    console.log("Setting Heap identity on https://heapworks-help.vercel.app/ to: " + heapIdentityQueryString);
    window.heap.identify(heapIdentityQueryString);
  }
}, 1000);

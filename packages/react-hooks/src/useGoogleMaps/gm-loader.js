function gMLoader({ key }) {
  return new Promise(resolve => {
    const mapScript = document.createElement('script');
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
    mapScript.async = true;
    document.body.appendChild(mapScript);
    mapScript.addEventListener('load', () => {
      resolve(window.google);
    });
  });
}

export default gMLoader;

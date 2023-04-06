/* Get Function
    - objectParam: The object to query
    - pathParam: The path of the property to get. It can be either:
                 (1) A string with '.' as a separator between fields.
                     ex. 'profile.name.firstName'
                 (2) An array of field strings.
                     ex. ['profile', 'name', 'firstName']
*/

function get(objectParam, pathParam, defaultValue) {
  /* Create array 'path' which contians path fields as elements. */
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  /*
  Loop through object recursively to get value
    - If previous result isn't null and isn't undefined, update 'object'.
    - If previous result is null but there are remaining path fields, set object to 'undefined'.
      This is for test cases like:
        get({ a: { b: null } }), 'a.b.c');
  */
  let object = objectParam;
  for (let i = 0; i < path.length; i++) {
    if (object !== null && object !== undefined) {
      object = object[path[i]];
    } else if (object === null && i < path.length) {
      object = undefined;
    }
  }

  /*
  Return
    - If 'object' is undefined, return 'defaultValue'.
    - For all other cases, return 'object'.
  */
  return object === undefined ? defaultValue : object;
}

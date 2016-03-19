var baseballRelated = false;

walk(document.body);

function walk(node)
{
  // I stole this function from here:
 // http://is.gd/mwZp7E

  var child, next;
//  console.log(tagName, 'tagName');

  if (!node || (node.tagName && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'))) {
    return;
  }

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      if (baseballRelated) {
        handleText(node);
      } else {
        checkForBaseballContext(node);
      }
      break;
  }
}

function handleText(textNode)
{
  var v = textNode.nodeValue;
  console.log("true");

  v = v.replace(/\bhome run(s)?\b/g, "ding dong Johnson$1");
  v = v.replace(/\bHome run(s)?\b/g, "Ding dong Johnson$1");
  v = v.replace(/\bHome Run(s)?\b/g, "Ding Dong Johnson$1");

  v = v.replace(/\bhomerun(s)?\b/g, "ding dong Johnson$1");
  v = v.replace(/\bHomerun(s)?\b/g, "Ding Dong Johnson$1");

  v = v.replace(/\bhomer(s)?\b/g, "ding dong Johnson$1");
  v = v.replace(/\bHomer(s)?\b/g, "Ding dong Johnson$1");

  v = v.replace(/\bHR(s|S)?\b/g, "DDJ$1");
  v = v.replace(/\bhr(s|S)?\b/g, "ddj$1");

  textNode.nodeValue = v;
}

function checkForBaseballContext(textNode)
{
  console.log("not true");
  var v = textNode.nodeValue;

  if (v.indexOf("baseball") > -1 || v.indexOf("home run") > -1 || v.indexOf("Home run") > -1) {
    baseballRelated = true;
  }

}



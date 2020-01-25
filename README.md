# JavaScript Loading Demo

This sample code shows the difference between normal, ``defer`` and ``async`` script loading.


## Normal Script loading

```
<body> 
   ...
   <script src="myscript.js"></script>
</body>
```

* The script tag is blocking by default.
* Especially with larger external JavaScript files there may be noticeable delays.

Typically, the script tags are placed at the end of the body tag.


## defer
``
<p>...</p>
<script defer src="script2.js"></script>
<!-- is displayed immediately -->
<p>...</p>
``

* defer tells the browser to continue processing the HTML and load the script in the background (non-blocking)
* The event DOMContentLoaded is only fired after all defer scripts.


## async

```
<p>...</p>
<script async src="script2.js"></script>
<!-- wird sofort angezeigt -->
<p>...</p>
````

async marks the loading of the script as completely independent, i.e.
     * it does not wait for the scripts marked async
     * ``DOMContentLoaded`` and async scripts do not wait for each other


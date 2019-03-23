# jquery.multilang

A simple jquery plugin that enables showing / hiding multi-language content, and allows users to switch between the different languages.

### Prerequisites

jquery 2.0.1


### Set up

Install the plugin, and use the following source code as an example. Basic use (using the default syntax), more examples can be found in the demo folder.

##### HTML
```
<div id="ex1">
    <h1 class="multilang" lang="cy">Teitl</h1>
    <h1 class="multilang" lang="en">Title</h1>
    <p class="multilang" lang="cy">Dyma fy nghynnwys yn Gymraeg.</p>
    <p class="multilang" lang="en">Here is my English content.</p>
</div>
```

##### javascript
```
<script src="http://code.jquery.com/jquery-2.0.1.min.js"></script>
<script src="src/langs.min.js"></script>
<script src="src/jquery.multilang.js"></script>
<script>
    $(function () {
        $('#ex1').multilang();
    });
</script>
```

##### CSS
```
#ex1 {
    color: #333333 !important;
}
#ex1 h1 {
    color: #999999;
}
#ex1 a:link, #ex1 a:visited {
    color: #0000FF;
    padding: 1px;
}
#ex1 a:hover, #ex1 a:active {
    color: #FFFFFF;
    background-color: #0000FF;
}
```

## Examples

View the examples in the demo folder. 

## Author

* **Gareth Cadwaladr** - *Initial work* - [gar-cad](https://github.com/gar-cad)

See also the list of [contributors](https://github.com/gar-cad/jquery.dataTree/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.MD) file for details
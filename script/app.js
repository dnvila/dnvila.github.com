/**
 * @author russo and dariel
 */
YUI().use('node', 'event', function (Y) {
    // The Node and Event modules are loaded and ready to use.
    // Your code goes here!
    Y.one('div#main').setHTML('<p>I am online.</p>');
    Y.log('I am online');
});
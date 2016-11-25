# amei
The install step:<br>
1--install ruby<br>
2--install compass<br>
3--install sass<br>
4--install node<br>
<br><br>
5--install yo:npm install -g yo<br>
6--install yo:npm install -g grunt-cli bower<br>
7--install yo:npm install -g generator-angular<br>
<br>
8--install amei
<br><br><br>
how to develop the project<br>
cd project folder<br>

click --- install.bat
<br>
click --- dev.bat
<br>

http://localhost:3100/app/

~~~~woo~it's success!~~~
<br>
if meet erro message like this:
<br>
Path must be a string. Received null Use --force to continue
<br>
method:<br>
I have found the issue to be when the reporterOutput option is set to null. If you change that option to refer to an empty string, jshint will work as expected:
<br>
options: {<br>
      jshintrc: '<%= baseDir %>/.jshintrc',<br>
      reporterOutput: "",<br>
      ...<br>
<br>

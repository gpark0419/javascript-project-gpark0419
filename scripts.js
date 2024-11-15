document.querySelectorAll('nav ul li a, h1 a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);

        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        document.getElementById(targetId).style.display = 'block';
    });
});

/*This code begins by selecting all navigation links within the <nav> element, as well as the name link in the <h1> element, using document.querySelectorAll. This creates a list of all relevant anchor (<a>) elements. The forEach method iterates over each of these links, attaching a click event listener to them.
When a link is clicked, the event listener prevents the default behavior of the anchor element, which would normally navigate to another part of the page. It does this by calling event.preventDefault(). The script then retrieves the href attribute of the clicked link, which contains the target section's ID prefixed with a #. Using the substring(1) method, the # is removed, leaving only the ID of the target section.
Next, all <section> elements on the page are selected using document.querySelectorAll('section'). The forEach method is used to loop through these sections, setting their style.display property to 'none' to hide them. After hiding all sections, the script identifies the specific section corresponding to the clicked link by using document.getElementById with the extracted target ID. The style.display property of this section is then set to 'block', making it visible on the page.
*/

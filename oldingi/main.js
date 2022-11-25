
        document.getElementById('getUsers').addEventListener
        ('click', getUsers);
        document.getElementById('getPosts').addEventListener
        ('click', getPosts);
        document.getElementById('getComments').addEventListener
        ('click', getComments);
        document.getElementById('getAlbums').addEventListener
        ('click', getAlbums);

        function getUsers(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                let output = '<h2>Users</h2>';
                data.forEach(function(user){
                    output += ` 
                    <ul>
                        <li>${user.id}</li>
                        <li>${user.name}</li>
                        <li>${user.username}</li>
                        <li>${user.email}</li>
                        <li>${user.address.street}</li>
                        <li>${user.address.suite}</li>
                        <li>${user.address.city}</li>
                        <li>${user.address.zipcode}</li>
                        <li>${user.address.geo.lat}</li>
                        <li>${user.address.geo.lng}</li>
                    </ul>
                    `;
                });
                document.getElementById('output').innerHTML = output;
            })
        }

        function getPosts(){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                let output = '<h2>Posts</h2>';
                data.forEach(function(post){
                    output += ` 
                    <div>
                        <h3>${post.id}</h3>
                        <strong>${post.title}</strong>
                        <p>${post.body}</p>
                    </div>
                    `;
                });
                document.getElementById('output').innerHTML = output;
            })
        }
        
        function getComments(){
            fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((data) => {
                let output = '<h2>Comments</h2>';
                data.forEach(function(comment){
                    output += ` 
                    <div>
                        <div>${comment.postId}</div>
                        <h3>${comment.id}</h3>
                        <strong>${comment.name}</strong>
                        <span>${comment.email}</span>
                        <p>${comment.body}</p>
                    </div>
                    `;
                });
                document.getElementById('output').innerHTML = output;
            })
        }
        function getAlbums(){
            fetch('https://jsonplaceholder.typicode.com/albums')
            .then((res) => res.json())
            .then((data) => {
                let output = '<h3>Albums</h3>';
                data.forEach(function(album){
                    output += `
                    <div>  
                        <h2>${album.userId}</h2>
                        <p>${album.id}</p>
                        <strong>${album.title}</strong> 
                    </div>
                    `;
                });
                document.getElementById('output').innerHTML = output;
            })
        }
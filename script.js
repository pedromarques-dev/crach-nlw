const userSocialMedia = {

    github : 'pedromarques-dev',
    youtube : 'XYhkwipsw8jxUtqEFYtCCA',
    facebook :'Peuumarques7',
    instagram : 'p_marques7',
    twitter : 'pmsev7n'

  }

  function changeSocialMediaLinks() {

    for(let li of socialLinks.children){
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`

    }


  }

  function getGitHubProfileInfos() {
     
    const url = `https://api.github.com/users/${userSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {

        userName.textContent =  data.name
        userBio.textContent = data.bio
        linkGit.href = data.html_url
        userFoto.src = data.avatar_url
        userGitHub.textContent = data.login
    })
      
  } 

  getGitHubProfileInfos()
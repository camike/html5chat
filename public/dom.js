function Message(type, other) {
    if (other) {
        this.type = other.type;   // Text, Image, Video
        this.username = other.username;
        this.avatar = other.avatar;
        this.text = other.text;
        this.img = other.img;
        this.video = other.video;
        this.date = other.date;
        this.outcomming = other.outcomming;
    }
    else {
        this.type = type;   // Text, Image, Video
        this.username = '';
        this.avatar = '';
        this.text = '';
        this.img = '';
        this.video = '';
        this.date = '';
        this.outcomming = true;
    }

    this.isOutComming = function () {
        return this.outcomming;
    }

    this.getAvatar = function () {
        var avatarNode = document.createElement('div');
        avatarNode.className = "avatar";
        if (this.avatar != '') {
            var imgNode = document.createElement('img');
            imgNode.src = this.avatar;
            avatarNode.appendChild(imgNode);
        }
        else {
            avatarNode.setAttribute('data-initial', this.username.charAt(0));
        }
        return avatarNode;
    }

    this.getContent = function () {
        var contentNode = document.createElement('div');
        contentNode.className = "content";
        contentNode.appendChild(this.getAuthor());
        if (this.type == "Text")
            contentNode.appendChild(this.getText());
        if (this.type == "Image")
            contentNode.appendChild(this.getPhoto());
        if (this.type == "Video")
            contentNode.appendChild(this.getVideo());
        contentNode.appendChild(this.getMeta());
        return contentNode;
    }

    this.getAuthor = function () {
        var authorNode = document.createElement('div');
        authorNode.className = "author";
        authorNode.innerText = this.username;
        return authorNode;
    }
    this.getText = function () {
        var textNode = document.createElement('div');
        textNode.className = "text";
        var pNode = document.createElement('p');
        pNode.innerText = this.text;
        textNode.appendChild(pNode);
        return textNode;
    }
    this.getPhoto = function () {
        var photoNode = document.createElement('img');
        photoNode.src = this.img;
        return photoNode;
    }

    this.getVideo = function () {
        var videoNode = document.createElement('video');
        videoNode.src = this.video;
        videoNode.controls = "controls";
        return videoNode;
    }
    this.getMeta = function () {
        var metaNode = document.createElement('div');
        metaNode.className = "meta";
        var itemNode = document.createElement('div');
        itemNode.className = "item";
        itemNode.innerText = this.date;
        metaNode.appendChild(itemNode);
        return metaNode;
    }


    this.getMessageNode = function () {
        var messageNode = document.createElement('div');
        messageNode.className = "message";
        if (this.type == "Video")
        messageNode.className += " video only";
        if (this.type == "Image") {
            messageNode.className += " img";
        }
        if (!this.isOutComming()) {
            messageNode.className += " right";
        }
        messageNode.appendChild(this.getAvatar());
        messageNode.appendChild(this.getContent());
        return messageNode;
    }
}


displayMessage = function (msg) {
    var room = document.querySelector('.cu');
    room.appendChild(msg.getMessageNode())
}






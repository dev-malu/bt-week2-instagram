
var stories = (item) => {
    var story = document.createElement('div');
    story.classList.add('col-3', 'col-md-2', 'status-story');
    
    var flexContainer = document.createElement('div');
    flexContainer.classList.add('d-flex', 'flex-column', 'align-items-center');
    
    var storyImg = document.createElement('img');
    storyImg.classList.add('card-img-top', 'rounded-circle');
    storyImg.src = item.url;
    storyImg.setAttribute('alt','img');
    flexContainer.appendChild(storyImg);
    
    var storyName = document.createElement('div');
    storyName.classList.add('fs-6', 'text-white', 'mb-0');
    storyName.innerHTML = item.text;
    flexContainer.appendChild(storyName);
    
    story.appendChild(flexContainer);

    return story;
}


const sliderInit = function () {
    var statusSlide = document.getElementById('status');
    
    var items = [
        { url: './image.jpeg', text: 'ro.ht_' },
        { url: './search.jpeg', text: 'ro.ht_' },
        { url: './search.jpeg', text: 'ro.ht_' },
        { url: './search.jpeg', text: 'ro.ht_' },
        { url: './search.jpeg', text: 'ro.ht_' },
        { url: './image.jpeg', text: 'ro.ht_' },
        { url: './search.jpeg', text: 'ro.ht_' },
        { url: './search.jpeg', text: 'ro.ht_' },
        { url: './search.jpeg', text: 'ro.ht_' },
        { url: './search.jpeg', text: 'ro.ht_' },
        { url: './search.jpeg', text: 'ro.ht_' },
    ];
    
    for(var i = 0; i < items.length; i++) {
        statusSlide.appendChild(stories(items[i]));
    }
    
    // slider----------------------------------------------------
    var statusBar = document.querySelector('.status-bar');
    var leftArrow = document.querySelector('.status-bar .left-arrow');
    var rightArrow = document.querySelector('.status-bar .right-arrow');
    var current = 0;
    
    var disableButtons = function () {
        var singleStatusWidth = document.querySelector('.status-bar .status-story').clientWidth + 4;
        if (current + statusBar.clientWidth >= (items.length - 1) * singleStatusWidth) {
            rightArrow.classList.add('d-none');
        } else {
            rightArrow.classList.remove('d-none');
        }
        if (current == 0) {
            leftArrow.classList.add('d-none');
        } else {
            leftArrow.classList.remove('d-none');
        }
    }
    
    rightArrow.addEventListener('click', function () {
        var singleStatusWidth = document.querySelector('.status-bar .status-story').clientWidth + 4;
        current += singleStatusWidth;
        statusSlide.style.transform = `translateX(-${current}px)`;
        disableButtons();
    });
    
    leftArrow.addEventListener('click', function () {
        var singleStatusWidth = document.querySelector('.status-bar .status-story').clientWidth + 4;
        current -= singleStatusWidth;
        if (current < 0) {
            current = 0;
        }
        statusSlide.style.transform = `translateX(-${current}px)`;
        disableButtons();
    })
    
    disableButtons();
    // slider []
};

sliderInit();


///----------------------card------------------------------------------------

var card = (item) => {

    var outerCard = document.createElement('div');
    outerCard.classList.add('card', 'bg-black', 'border-light', 'border-opacity-25','mb-4');
    
    var flexCard = document.createElement('div');
    flexCard.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'px-2', 'text-white');
    
    var cardHeading = document.createElement('div');
    cardHeading.classList.add('card-heading', 'd-flex', 'align-items-center', 'gap-1', 'p-2');
    
    var profileImg = document.createElement('img');
    profileImg.classList.add('rounded-circle', 'propic');  //change
    profileImg.src = item.profilepicUrl;
    
    var profileText = document.createElement('h6');   //change
    profileText.classList.add('card-header','text-white');
    profileText.appendChild(document.createTextNode(item.profileName));
    
    var dot = document.createElement('i');
    dot.classList.add('bi', 'bi-three-dots');
    
    cardHeading.appendChild(profileImg);
    cardHeading.appendChild(profileText);
    flexCard.appendChild(cardHeading);
    flexCard.appendChild(dot);    
    outerCard.appendChild(flexCard);
    
    //------- main img ----------------------------------
    
    var mainImg = document.createElement('img');
    mainImg.classList.add('card-img-top', 'rounded-0');   //change
    mainImg.src = item.cardImg;
    outerCard.appendChild(mainImg);
    
    //--------------------------  reactions ----------------
    
    var mainCardBody = document.createElement('div');
    mainCardBody.classList.add('card-body', 'd-flex', 'flex-column', 'gap-1', 'text-white');
    
    var reactionContainer = document.createElement('div');
    reactionContainer.classList.add('reations', 'd-flex', 'justify-content-between');
    
    var mainReactions = document.createElement('div');
    mainReactions.classList.add('main-reactions', 'd-flex', 'align-items-center', 'gap-3', 'text-white', 'fs-4', 'fw-500');
    
    var cardDescription_1 = document.createElement('h6');
    var icon1 = document.createElement('i');
    icon1.classList.add('bi', 'bi-heart');

    var liked = false;
    icon1.addEventListener('click', function () {
        var likeCount = 0;
        if (liked) {
            likeCount = parseInt(cardDescription_1.getAttribute('data-value')) - 1;
            icon1.classList.add('bi-heart');
            icon1.classList.remove('bi-heart-fill', 'text-danger');
        } else {
            likeCount = parseInt(cardDescription_1.getAttribute('data-value')) + 1;
            icon1.classList.remove('bi-heart');
            icon1.classList.add('bi-heart-fill', 'text-danger');
        }
        cardDescription_1.setAttribute('data-value', likeCount);
        cardDescription_1.innerHTML = `${likeCount} likes`;
        liked = !liked;
    });
    
    var icon2 = document.createElement('i');
    icon2.classList.add('bi', 'bi-chat');
    
    var icon3 = document.createElement('i');
    icon3.classList.add('bi', 'bi-send');

    mainReactions.appendChild(icon1);
    mainReactions.appendChild(icon2);
    mainReactions.appendChild(icon3);

    reactionContainer.innerHTML = `<svg aria-label="Save" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)"
           fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24"
           width="25">
          <title>Save</title>
          <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"
           stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
           stroke-width="2"></polygon>
       </svg>`;

    reactionContainer.prepend(mainReactions);
    mainCardBody.appendChild(reactionContainer);
   
  
    //----------------------card description(have changes)
    

    cardDescription_1.classList.add('card-title', 'mb-0');
    cardDescription_1.setAttribute('data-value', item.likes)
    cardDescription_1.appendChild(document.createTextNode(`${item.likes} likes`));
    
    var cardDescription_2 = document.createElement('p');
    cardDescription_2.classList.add('card-text');
    cardDescription_2.appendChild(document.createTextNode(item.cardDescrip_2));
    
    var cardDescription_3 = document.createElement('a');
    cardDescription_3.classList.add('card-text');
    cardDescription_3.href = item.profilepicUrl;
    cardDescription_3.appendChild(document.createTextNode(item.cardDescrip_3));
    
    var cardDescription_4 = document.createElement('p');
    cardDescription_4.classList.add('card-text', 'text-white-50');
    cardDescription_4.appendChild(document.createTextNode(item.cardDescrip_4));
    
    var timeDescription = document.createElement('small');
    timeDescription.classList.add('text-white-50', 'fw-lighter', 'fs-6');
    timeDescription.appendChild(document.createTextNode(item.timeDesc));
    
    var translation = document.createElement('span');
    translation.classList.add('fw-bold', 'fs-6');
    translation.appendChild(document.createTextNode('See translation'));
    
    mainCardBody.appendChild(cardDescription_1);
    mainCardBody.appendChild(cardDescription_2);
    mainCardBody.appendChild(cardDescription_3);
    mainCardBody.appendChild(cardDescription_4);
    mainCardBody.appendChild(timeDescription);
    mainCardBody.appendChild(translation);
    
    outerCard.appendChild(mainCardBody);
   
    
    //-----------------comment section-------------------
    var commentBody = document.createElement('div');
    commentBody.classList.add('card-body', 'd-flex', 'justify-content-between', 'align-items-center', 'gap-1', 'text-white', 'border-top', 'border-light', 'border-opacity-25');
    
    var commentContainer = document.createElement('div');
    commentContainer.classList.add('d-flex', 'gap-2');
    
    var commentIcon = document.createElement('i');
    commentIcon.classList.add('bi', 'bi-emoji-smile');
    
    var inputComment = document.createElement('input');
    inputComment.classList.add('bg-black', 'border-0','text-white');
    inputComment.setAttribute('type','input');
    inputComment.setAttribute('placeholder','Add a comment...');
    
    var postBtn = document.createElement('button');
    postBtn.classList.add('bg-black', 'border-0', 'fw-bold', 'text-info');
    postBtn.appendChild(document.createTextNode('Post'));
    
    commentContainer.appendChild(commentIcon);
    commentContainer.appendChild(inputComment);
    
    commentBody.appendChild(commentContainer);
    commentBody.appendChild(postBtn);

    outerCard.appendChild(commentBody);

    return outerCard;
    
    //-------------------------------------------------------

};
var items = [
    { profilepicUrl: './image.jpeg', profileName: 'ro.ht_', cardImg: './pic.2.jpeg', likes: 183, cardDescrip_2: 'roht_.cherryblossoms @s_h_i_l_p_a 🌸',cardDescrip_3: '#cherryblossoms#happy',cardDescrip_4: 'View all 166 comments',timeDesc: '4 DAYS AGO'},
    { profilepicUrl: './search.jpeg', profileName: 'ro.ht_', cardImg: './image.jpeg', likes: 183, cardDescrip_2: 'roht_.cherryblossoms @s_h_i_l_p_a 🌸',cardDescrip_3: '#cherryblossoms#happy',cardDescrip_4: 'View all 166 comments',timeDesc: '4 DAYS AGO'},
    { profilepicUrl: './search.jpeg', profileName: 'ro.ht_', cardImg: './pic.3.jpeg', likes: 183, cardDescrip_2: 'roht_.cherryblossoms @s_h_i_l_p_a 🌸',cardDescrip_3: '#cherryblossoms#happy',cardDescrip_4: 'View all 166 comments',timeDesc: '4 DAYS AGO'},
    { profilepicUrl: './search.jpeg', profileName: 'ro.ht_', cardImg: './explore.jpeg', likes: 183, cardDescrip_2: 'roht_.cherryblossoms @s_h_i_l_p_a 🌸',cardDescrip_3: '#cherryblossoms#happy',cardDescrip_4: 'View all 166 comments',timeDesc: '4 DAYS AGO'},
];

var proCardContainer = document.querySelector('.pro-cards');

for (var i = 0; i < items.length;i++) {
    proCardContainer.appendChild(card(items[i]));
}

//------------------RIGHT CONTAINER--------------------------------

var generatepDescription = (pItem) => {
    var outerDiv = document.createElement('div');
    outerDiv.classList.add('right-container', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-4', 'mt-2');

    var peopleDescriptionContainer = document.createElement('div');
    peopleDescriptionContainer.classList.add('d-flex', 'align-items-center', 'gap-1');
    
    var peopleImg = document.createElement('img');
    peopleImg.classList.add('rounded-circle','prof-img');
    peopleImg.src = pItem.image;
    peopleDescriptionContainer.appendChild(peopleImg);
    
    var peopleDetails = document.createElement('div');
    peopleDetails.classList.add('acc-Details','d-flex','flex-column','mb-0');
    
    var peopleName = document.createElement('p');
    peopleName.classList.add('accountName','mb-0','fw-bold','fs-6','text-white');
    peopleName.appendChild(document.createTextNode(pItem.name));
    peopleDetails.appendChild(peopleName);
    
    var peoplenickName = document.createElement('p');
    peoplenickName.classList.add('accountNickName','mb-0','fs-6','text-white-50');
    peoplenickName.appendChild(document.createTextNode(pItem.nickName));
    peopleDetails.appendChild(peoplenickName);
    peopleDescriptionContainer.appendChild(peopleDetails);
    
    var action = document.createElement('a');
    action.classList.add('fs-6', 'text-decoration-none', 'fw-bold');
    action.href = pItem.action;
    action.appendChild(document.createTextNode(pItem.action));

    outerDiv.appendChild(peopleDescriptionContainer);
    outerDiv.appendChild(action);

    return outerDiv;
};

var rightContainer = document.getElementById('profile-switch');

var pItems = [
    { name: 's_h_i_l_p_a', nickName: 'shilpa Bindhu',action: 'switch', image: './search.jpeg'},
];

for(let i = 0; i < pItems.length; i++) {
    rightContainer.appendChild(generatepDescription(pItems[i]));
}

var inviteContainer = document.getElementById('invite-users');

var pItems = [
    { name: 'm_alu', nickName: 'malu',action: 'invite', image: './image.jpeg'},
    { name: 'adarsh_', nickName: 'adarsh',action: 'invite', image: './search-2.jpeg'},
    { name: 'YshnaV', nickName: 'vaishu',action: 'invite', image: './search-3.jpeg'},
    { name: 'N__akul', nickName: 'nakul',action: 'invite', image: './search.jpeg'},
    { name: 'A_mm_al', nickName: 'ammal',action: 'invite', image: './search.jpeg'},
];

for(let i = 0; i < pItems.length; i++) {
    inviteContainer.appendChild(generatepDescription(pItems[i]));
}

























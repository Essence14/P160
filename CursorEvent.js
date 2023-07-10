AFRAME.registerComponent('cursor-events', {
    init: function () {
        const thumbnails = document.querySelectorAll('.thumbnail');
        const places = document.querySelectorAll('.place');

        this.handleMouseEnterEvents = function () {
            const placeContainer = document.querySelector('#places-container');
            placeContainer.setAttribute('cursor-events', 'state', 'select');
        };

        this.handleMouseLeaveEvents = function () {
            const placeContainer = document.querySelector('#places-container');
            placeContainer.setAttribute('cursor-events', 'state', 'deselect');
        };

        this.handleMouseClickEvents = function () {
            const placeContainer = document.querySelector('#places-container');
            placeContainer.setAttribute('cursor-events', 'state', 'show');
        };

        for (let i = 0; i < thumbnails.length; i++) {
            const thumbnail = thumbnails[i];
            thumbnail.addEventListener('mouseenter', this.handleMouseEnterEvents);
            thumbnail.addEventListener('mouseleave', this.handleMouseLeaveEvents);
            thumbnail.addEventListener('click', this.handleMouseClickEvents);
        }

        for (let i = 0; i < places.length; i++) {
            const place = places[i];
            place.addEventListener('mouseenter', this.handleMouseEnterEvents);
            place.addEventListener('mouseleave', this.handleMouseLeaveEvents);
            place.addEventListener('click', this.handleMouseClickEvents);
        }
    }
});

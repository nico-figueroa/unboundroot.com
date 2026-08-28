// youtube-facade.js — defers loading the YouTube player/JS until the user opts in
export function initYoutubeFacades() {
    document.querySelectorAll('[data-yt-facade]').forEach((facade) => {
        const activate = () => loadVideo(facade);

        facade.addEventListener('click', activate);
        facade.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                activate();
            }
        });
    });
}

function loadVideo(facade) {
    const videoId = facade.dataset.videoId;
    if (!videoId) {
        return;
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
    iframe.title = facade.dataset.videoTitle || 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.width = '560';
    iframe.height = '270';

    facade.replaceWith(iframe);
}

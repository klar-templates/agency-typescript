export default function PageScript() {
  return (
    <Script />
  );
 
  function Script() {
    const pageScript = `
      <!-- Theme JavaScript -->
      <script>
        // Agency Theme JavaScript
        (function($) {
          "use strict"; // Start of use strict
          
          // jQuery for page scrolling feature - requires jQuery Easing plugin
          $('a.page-scroll').bind('click', function(event) {
              var $anchor = $(this);
              if (!$anchor.attr('href')) return;
              if (!$anchor.attr('href').startsWith('#')) return;
              if (!$($anchor.attr('href')).length) return;
              $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
                // scrollTop: ($($anchor.attr('href')).offset().top)
              }, 1250, 'easeInOutExpo');
              event.preventDefault();
          });
          
          // Highlight the top nav as scrolling occurs
          $('body').scrollspy({
              target: '.navbar-fixed-top',
              offset: 51
          });
          
          // Closes the Responsive Menu on Menu Item Click
          $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
          });
          
          // Offset for Main Navigation
          $('#main-nav').affix({
            offset: {
              top: 100
            }
          });
        })(jQuery);
      </script>

      <!-- Klarscript, executes when page is loaded. -->
      <script>
        function klarScript() {
          // Add 'klar-modal-open' CSS class, when modal is opened
          $('.modal').on('show.bs.modal', function (event) {
            var modal = this;
            modal.classList.add('klar-modal-open');
          });
          $('.modal').on('hide.bs.modal', function (event) {
            var modal = this;
            modal.classList.remove('klar-modal-open');
          });
        }
        klarScript();
      </script>`;
    return <div dangerouslySetInnerHTML={{__html: pageScript}} />;
  }
}
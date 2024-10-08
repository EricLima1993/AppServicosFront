import { AfterViewInit, Component,  } from '@angular/core';
import jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'vendas-app';

  ngAfterViewInit(): void {
    (function($) {
      "use strict";
  
      var path = window.location.href;
      
      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
        if (this instanceof HTMLAnchorElement && this.href === path) {
          $(this).addClass("active");
        }
      });
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }
}

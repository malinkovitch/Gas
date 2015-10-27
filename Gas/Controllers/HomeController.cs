using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Gas.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Привет. Страница Home";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Страничка контактов";

            return View();
        }

        public ActionResult Mock()
        {
            return View();
        }

    }
}

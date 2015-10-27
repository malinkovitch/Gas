using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Gas.Controllers
{
    public class FontController : Controller
    {
        public ActionResult Fonts()
        {
            return View();
        }

        public ActionResult GetFontBlockView()
        {
            return PartialView();
        }

    }
}

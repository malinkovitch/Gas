using System;
using System.Web.Configuration;
using System.Web.Mvc;
using Gas.Models;

namespace Gas.Controllers
{
    public class FontController : Controller
    {
        public ActionResult Fonts()
        {
            string xmlPath = Server.MapPath(WebConfigurationManager.AppSettings["FontsDbFilePath"]);
            FontStorage fonts = new FontStorage(xmlPath);
            Font[] listOfFonts = fonts.GetAllFonts();

            return View(listOfFonts);
        }

        public ActionResult GetFontBlockView()
        {
            return PartialView();
        }
    }
}

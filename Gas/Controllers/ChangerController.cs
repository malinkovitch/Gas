using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Gas.Models;

namespace Gas.Controllers
{
    public class ChangerController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(Font font, IEnumerable<HttpPostedFileBase> fileUpload)
        {
            FontLoader loadFont = new FontLoader();
            loadFont.FontFileLoad(fileUpload, font.Name);
            loadFont.WriteFontDataXml(font.Name, font.Price, font.Types);
            
            return View("Thanx");
        }

        public ActionResult Thanx()
        {
            return View();
        }
    }
}

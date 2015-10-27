using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Gas.Controllers
{
    public class ContactsController : Controller
    {
        public ActionResult Contacts()
        {
            ViewBag.Message = "Страничка контактов";

            return View();
        }

    }
}

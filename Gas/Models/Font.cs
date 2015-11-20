using System;
using System.Collections.Generic;
using System.IO;
using System.Web;
using System.Xml.Linq;

namespace Gas.Models
{
    public class Font
    {
        public string Name { get; set; }
        public String CssName { get; set; }
        public String Price { get; set; }
        public String FontUrl { get; set; }
        
        public string[] Type { get; set; }

        public bool CyrType { get; set; }
        public bool LatinType { get; set; }
        public bool NumType { get; set; }
        public bool LigaturesType { get; set; }
        public string Types
        {
            set { value = "none"; }
            get
            {
                string[] categoryTypes = {(CyrType) ? "кириллица" : "", (LatinType) ? "латиница" : "", (NumType) ? "цифры" : "", (LigaturesType) ? "лигатуры" : ""};
                string categoryString = "";
                foreach (string item in categoryTypes)
                {
                    if (!String.IsNullOrEmpty(item)) categoryString += item + ",";
                }
                return categoryString.TrimEnd(',');

            }
        }

    }

    public class FontLoader
    {
        //private string path = @"c:\projects\temp";
        private string appPath = AppDomain.CurrentDomain.BaseDirectory;

        public void FontFileLoad(IEnumerable<HttpPostedFileBase> fileUpload, string fileName)
        {
            foreach (var file in fileUpload)
            {
                if (file == null) continue;
                string pathToFontStorage = appPath + @"fonts\";
                string name = Path.GetFileName(file.FileName);
                if (name != null)
                {
                    string filename = name.Replace(" ", string.Empty);
                    file.SaveAs(Path.Combine(pathToFontStorage, filename));

                    // Load CSS to fontsheet.css
                    WriteFontCssStyle(fileName, file, filename);
                }
            }

        }

        private void WriteFontCssStyle(string fontName, HttpPostedFileBase file, string fileName)
        {
            string pathToFontCss = appPath + @"Content\";
            string newFontStyle = "\n@font-face{\n\tfont-family: " + "\'" + fontName + "\';\n\tsrc: url(../fonts/" + fileName + ");\n}";

            if (File.Exists(pathToFontCss + @"fontsheet.css"))
            {
                using (StreamWriter writerToCss = File.AppendText(pathToFontCss + "fontsheet.css"))
                {
                    writerToCss.WriteLine(newFontStyle);
                    writerToCss.Close();
                }
            }
        }

        public void WriteFontDataXml(string fontdbname, string fontdbprice, string fontdbcategories)
        {
            string pathToXml = appPath + @"App_Data\" + @"fontdb.xml";
            XDocument superD = XDocument.Load(pathToXml);
            var xElement = superD.Element("Fonts");
            if (xElement != null)
                xElement.Add(
                    new XElement("Font",
                        new XAttribute("Name", fontdbname),
                        new XAttribute("CssName", fontdbname), 
                        new XAttribute("Path", ""),
                        new XAttribute("Categories", fontdbcategories),
                        new XAttribute("Price", fontdbprice)));
            superD.Save(pathToXml);
            
        }

    }



}
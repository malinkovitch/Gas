using System;
using System.Collections.Generic;
using System.IO;
using System.Xml;

namespace Gas.Models
{
    public class FontStorage
    {
        private readonly string xmlPath;

        public FontStorage(string xmlPath)
        {
            if (!File.Exists(xmlPath))
            {
                throw new ArgumentException("Не удалось загрузить файл " + xmlPath);
                //Console.WriteLine("Не удалось загрузить файл");
            }

            this.xmlPath = xmlPath;
        }

        public XmlDocument LoadFile()
        {
            XmlDocument reader = new XmlDocument();
            reader.Load(xmlPath);
            return reader;
        }

        public Font[] GetAllFonts()
        {
            var fontsList = new List<Font>();
            var nodeList = LoadFile().GetElementsByTagName("Font");
            foreach (XmlNode fontElement in nodeList)
            {
                var font = new Font
                {
                    Name = GetName(fontElement),
                    CssName = GetCssName(fontElement),
                    FontUrl = GetFontUrl(fontElement),
                    Type = GetType(fontElement),
                    Price = GetPrice(fontElement)
                };
                fontsList.Add(font);
            }
            return fontsList.ToArray();
        }

        private string GetName(XmlNode fontElement)
        {
            if (fontElement.Attributes != null && !String.IsNullOrEmpty(fontElement.Attributes["Name"].Value))
            {
                return fontElement.Attributes["Name"].Value;
            }
            return null;
        }

        private string GetFontUrl(XmlNode fontElement)
        {
            if (fontElement.Attributes != null && !String.IsNullOrEmpty(fontElement.Attributes["Path"].Value))
            {
                return fontElement.Attributes["Path"].Value;
            }
            return null;
        }

        private string[] GetType(XmlNode fontElement)
        {
            string arrayOfCategories = null;
            if (fontElement.Attributes != null && !String.IsNullOrEmpty(fontElement.Attributes["Categories"].Value))
            {
                 arrayOfCategories = fontElement.Attributes["Categories"].Value;
            }
            if (arrayOfCategories != null) return arrayOfCategories.ToLower().Split(',');
            return null;
        }

        private string GetPrice(XmlNode fontElement)
        {
            if (fontElement.Attributes != null && !String.IsNullOrEmpty(fontElement.Attributes["Price"].Value))
            {
                return fontElement.Attributes["Price"].Value;
            }
            return null;
        }

        private string GetCssName(XmlNode fontElement)
        {
            if (fontElement.Attributes["CssName"] != null && !String.IsNullOrEmpty(fontElement.Attributes["CssName"].Value))
            {
                return fontElement.Attributes["CssName"].Value;
            }
            return "PTM55F";
        }
    }
}
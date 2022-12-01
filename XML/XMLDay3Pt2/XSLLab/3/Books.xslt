<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
<xsl:template match="books">

	<p>Review = 3.5 :: <xsl:value-of select="count(book[review = 3.5])" /> </p>
	<p>Review = 4 :: <xsl:value-of select="count(book[review = 4])" /> </p>
	
</xsl:template>
</xsl:stylesheet>

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
<xsl:template match="books">
		<table  border="1">
			<tbody>
				<!--<tr>
					<th>position</th>
					<th>authhor</th>
					<th>title</th>
					<th>price</th>
				</tr> -->
				<h1>A list of books</h1>
				<xsl:for-each select="book">
					<tr>
						<th><xsl:value-of select="position()"/></th>
						<th><xsl:value-of select="author"/></th>
						<th><xsl:value-of select="title"/></th>
						<th><xsl:value-of select="price"/></th>
					</tr>
	
				</xsl:for-each>
		
			</tbody>
		</table>
</xsl:template>
</xsl:stylesheet>

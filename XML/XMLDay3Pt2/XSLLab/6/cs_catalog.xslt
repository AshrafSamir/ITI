<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
<xsl:template match="CATALOG">
		<table  border="1">
			<tbody>
				<h1>My CD Collection</h1>
				<tr>
					<th style="background-color:green">Title</th>
					<th style="background-color:green">Artist</th>
				</tr> 
				<xsl:for-each select="CD">
				<!--<xsl:sort select="PRICE" order="descending" data-type="number"/>-->
					<tr>
						<th><xsl:value-of select="TITLE"/></th>
						<xsl:choose>
						  <xsl:when test="PRICE &gt; 10">
							<th style="background-color:red"><xsl:value-of select="ARTIST"/></th>
						  </xsl:when>
						  <xsl:otherwise>
							<th style="background-color:green"><xsl:value-of select="ARTIST"/></th>
						  </xsl:otherwise>
						</xsl:choose>
					</tr>


				</xsl:for-each>
		
			</tbody>
		</table>
</xsl:template>
</xsl:stylesheet>

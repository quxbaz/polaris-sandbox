import React from 'react'
import {
  AppProvider, Layout, Page, Card,
  FormLayout, Button, TextStyle,
} from '@shopify/polaris'
import ReportsPieChart from './reports-charts/ReportsPieChart'
import ReportsLineChart from './reports-charts/ReportsLineChart'
import ReportsBarChart from './reports-charts/ReportsBarChart'

function ShopifyPage () {
  return (
    <AppProvider>
      <Page fullWidth title="Dashboard">

        <Layout>
          <Layout.Section oneThird>
            <ReportsPieChart />
          </Layout.Section>
          <Layout.Section oneThird>
            <ReportsLineChart />
          </Layout.Section>
          <Layout.Section oneThird>
            <ReportsBarChart />
          </Layout.Section>
        </Layout>

        <Layout.AnnotatedSection title="SMS Message" description="The message that will be delivered to customer when inventory comes back in stock.">
          <Card sectioned>
            <FormLayout>
              <textarea name="message" label="Message" maxLength={140} multiline={4} />
              <Card.Section title="Liquid variables">
                <TextStyle variation="subdued">
                  <ul>
                    <li>Shop Name:{' '}<TextStyle variation="code">&#123&#123 shop.name &#125&#125</TextStyle></li>
                    <li>Product Title:{' '}<TextStyle variation="code">&#123&#123 product_variant.title &#125&#125</TextStyle></li>
                    <li>Product Url:{' '}<TextStyle variation="code">&#123&#123 product_variant.url &#125&#125</TextStyle></li>
                  </ul>
                </TextStyle>
              </Card.Section>
              <Button primary submit id="updateTemplate">Save</Button>
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection title="Send Preview (SMS)" description="Send preview SMS to store's phone number (Settings > General > Store address > Phone).">
          <Card sectioned>
            <Button primary id="sendPreview">Send Preview SMS</Button>
          </Card>
        </Layout.AnnotatedSection>

      </Page>
    </AppProvider>
  )
}

export default ShopifyPage

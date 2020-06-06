import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPerson, MdFolder, MdBook, MdList } from 'react-icons/md'
import { GiHeartNecklace, GiShop } from 'react-icons/gi'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'product', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Website Content')
    .items([
      // S.listItem()
      //   .title('Pages')
      //   .child(
      //     S.list()
      //       .title('Pages')
      //       .items([
      //         S.documentListItem()
      //           .id('mystory')
      //           .title('My Story')
      //           .schemaType('page'),
      //         S.documentListItem()
      //           .id('loanInformation')
      //           .title('Loan Information')
      //           .schemaType('page'),
      //         S.listItem()
      //           .title('Loan Info Pages')
      //           .icon(MdFolder)
      //           .child(
      //             S.list()
      //               .title('Loan Info Pages')
      //               .items([
      //                 S.documentListItem()
      //                   .id('loanOptions')
      //                   .title('Loan Options')
      //                   .schemaType('page'),
      //                 S.documentListItem()
      //                   .id('refinancing')
      //                   .title('Refinancing')
      //                   .schemaType('page'),
      //                 S.documentListItem()
      //                   .id('whatIsMortgageInsurance')
      //                   .title('What Is Mortgage Insurance')
      //                   .schemaType('page')
      //               ])
      //           ),
      //         S.documentListItem()
      //           .id('apply')
      //           .title('Apply')
      //           .schemaType('page'),
      //         S.documentListItem()
      //           .id('media')
      //           .title('Media')
      //           .schemaType('page'),
      //         S.documentListItem()
      //           .id('typesOfLoans')
      //           .title('Types of Loans')
      //           .schemaType('page'),
      //         S.listItem()
      //           .title('Types of Loans Sub-Pages')
      //           .child(
      //             S.list()
      //               .title('Types of Loans Sub-Pages')
      //               .items([
      //                 S.documentListItem()
      //                   .id('adjustableRateMortgage')
      //                   .title('Adjustable Rate Mortgage')
      //                   .schemaType('page'),
      //                 S.documentListItem()
      //                   .id('convenionalLoan')
      //                   .title('Conventional Loan')
      //                   .schemaType('page'),
      //                 S.documentListItem()
      //                   .id('fhaLoan')
      //                   .title('FHA Loan')
      //                   .schemaType('page'),
      //                 S.documentListItem()
      //                   .id('jumboLoan')
      //                   .title('Jumbo Loan')
      //                   .schemaType('page'),
      //                 S.documentListItem()
      //                   .id('usdaLoan')
      //                   .title('USDA Loan')
      //                   .schemaType('page'),
      //                 S.documentListItem()
      //                   .id('vaLoan')
      //                   .title('VA Loan')
      //                   .schemaType('page')
      //               ])
      //           )
      //           .icon(MdFolder),
      //         S.documentListItem()
      //           .id('loanCalculator')
      //           .title('Loan Calculator')
      //           .schemaType('page'),
      //         S.documentListItem()
      //           .id('houseEstimator')
      //           .title('House Estimator')
      //           .schemaType('page'),
      //         S.documentListItem()
      //           .id('contactMe')
      //           .title('Contact')
      //           .schemaType('page')
      //       ])
      //   ),
      S.listItem()
        .icon(GiHeartNecklace)
        .title('Products')
        .schemaType('product')
        .child(S.documentTypeList('product').title('Products')),
      S.listItem()
        .icon(GiShop)
        .title('Vendors')
        .schemaType('vendor')
        .child(S.documentTypeList('vendor').title('Vendors')),
      // S.listItem()
      //   .icon(MdBook)
      //   .title('Blog posts')
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Blog posts')),
      // S.listItem()
      //   .icon(MdList)
      //   .title('Blog Posts by Category')
      //   .child(
      //     S.documentList()
      //       .title('Categories')
      //       .menuItems(S.documentTypeList('category').getMenuItems())
      //       .filter('_type == $type')
      //       .params({type: 'category'})
      //       .child(categoryId =>
      //         S.documentList()
      //           .title('Posts')
      //           .menuItems(S.documentTypeList('post').getMenuItems())
      //           .filter('_type == $type && $categoryId in categories[]._ref')
      //           .params({type: 'post', categoryId})
      //       )
      //   ),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])

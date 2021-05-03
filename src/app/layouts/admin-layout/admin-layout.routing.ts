import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ClientManagementComponent } from '../../pages/client-management/client-management.component';
import { QuoteManagementComponent } from '../../pages/quote-management/quote-management.component';
import { InvoiceManagementComponent } from '../../pages/invoice-management/invoice-management.component';
import { ProjectManagementComponent } from '../../pages/project-management/project-management.component';
import { SupportTicketComponent } from '../../pages/support-ticket/support-ticket.component';

import { MasterComponent } from '../../pages/master/master.component';
import { MasterClientComponent } from '../../pages/master-client/master-client.component';
import { MasterCountryComponent } from '../../pages/master-country/master-country.component';
import { MasterProjectComponent } from '../../pages/master-project/master-project.component';
import { MasterSupportTicketComponent } from '../../pages/master-support-ticket/master-support-ticket.component';

import { QuoteviewComponent } from '../../pages/quoteview/quoteview.component';
import { ClienteditComponent } from '../../pages/client-edit/client-edit.component';
import { CreateInvoiceComponent } from '../../pages/create-invoice/create-invoice.component';
import { CreateProjectComponent } from '../../pages/create-project/create-project.component';
import { CreateTicketComponent } from '../../pages/create-ticket/create-ticket.component';
import { ViewTicketComponent } from '../../pages/view-ticket/view-ticket.component';
import { clientReportComponent } from '../../pages/client-report/client-report.component';
import { ProjectReportComponent } from '../../pages/project-report/project-report.component';
import { QuoteReportComponent } from '../../pages/quote-report/quote-report.component';
import { ClientTypeComponent } from '../../pages/client-type/client-type.component';
import { ClientCountryComponent } from '../../pages/client-country/client-country.component';
import { ProjectTypeComponent } from '../../pages/project-type/project-type.component';
import { SupportTicketImpactComponent } from '../../pages/support-ticket-impact/support-ticket-impact.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { PrivacyPolicyComponent } from '../../pages/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from '../../pages/terms-condition/terms-condition.component';

import { CmsManagement } from '../../pages/cms-management/cms-management.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'invoice-management',   component: InvoiceManagementComponent },
    { path: 'project-management',         component: ProjectManagementComponent },
    { path: 'client-management',          component: ClientManagementComponent },
    { path: 'quote-management', component: QuoteManagementComponent },
    { path: 'support-ticket',           component: SupportTicketComponent },
    { path: 'master',           component: MasterComponent },
    
    { path: 'master-client',           component: MasterClientComponent },
    { path: 'master-country',           component: MasterCountryComponent },
    { path: 'master-project',           component: MasterProjectComponent },
    { path: 'master-support-ticket',           component: MasterSupportTicketComponent },

    { path: 'quoteview',           component: QuoteviewComponent },
    { path: 'client-edit',           component: ClienteditComponent },
    { path: 'create-invoice',           component: CreateInvoiceComponent },
    { path: 'create-project',           component: CreateProjectComponent },
    { path: 'create-ticket',           component: CreateTicketComponent },
    { path: 'view-ticket',           component: ViewTicketComponent },
    { path: 'client-report',           component: clientReportComponent },
    { path: 'project-report',           component: ProjectReportComponent },
    { path: 'quote-report',           component: QuoteReportComponent },
    { path: 'client-type',           component: ClientTypeComponent },
    { path: 'client-country',           component: ClientCountryComponent },
    { path: 'project-type',           component: ProjectTypeComponent },
    { path: 'support-ticket-impact',           component: SupportTicketImpactComponent },
    { path: 'about-us',           component: AboutUsComponent },
    { path: 'privacy-policy',           component: PrivacyPolicyComponent },
    { path: 'terms-condition',           component: TermsConditionComponent },
    
    { path: 'cms-management',           component: CmsManagement }
];